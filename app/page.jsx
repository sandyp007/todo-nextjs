'use client'
import React, { useContext, useLayoutEffect, useState } from 'react'
import '../styles/globals.css'
import HeaderComponent from './components/Header'
import InputTask from './components/InputTask'
import taskContext from './context/taskContext'
import Modal from './components/Modal'
import { Josefin_Sans } from '@next/font/google'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import StatusTask from './components/StatusTask'

const josefin = Josefin_Sans({
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"]
})

const HomePage = () => {
    const [modal, setModal] = useState(false)
    const { dbTasks, handleUpdateDragAndDrop, current, pendingTask, tasksDone, filteredData, setclassDrag } = useContext(taskContext)
    const list = [{ current: 'all', type: dbTasks.length }, { current: 'active', type: pendingTask.length }, { current: 'completed', type: tasksDone.length }]
    return (
        <DragDropContext onDragEnd={result => {
            handleUpdateDragAndDrop(result)
        }} onDragStart={() => setclassDrag('')} >
            <div className={`dark:bg-bodyDark dark:text-textDark bg-bodyLight text-textLight ${josefin.className} transition-colors duration-200  min-h-screen w-full h-full pb-24`}>
                <HeaderComponent />
                <div className='dark:bg-containerDark dark:text-textDark bg-bodyLight text-textLight w-[90%] m-auto -mt-6 overflow-hidden rounded-md flex items-center justify-center divide-[#d1cece] flex-col transition-colors duration-200 md:max-w-2xl' >
                    <Droppable droppableId='tasks'>
                        {(droppableProvided) =>
                            <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className='w-full divide-y flex flex-col flex-wrap'>
                                {filteredData.length > 0 ? filteredData.map((tsk, index) =>
                                    <Draggable key={tsk.id} draggableId={tsk.id} index={index}>
                                        {(draggableProvided) =>
                                            <span ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps}>
                                                <InputTask id={tsk.id} isDone={tsk.isDone} content={tsk.content} />
                                            </span>
                                        }
                                    </Draggable>) :
                                    <p className='py-4 text-center'>{`${current === 'completed' ? 'You have not completed any tasks 🥹' : 'Add a new task '}`}</p>
                                }
                                {droppableProvided.placeholder}
                            </div>
                        }
                    </Droppable>
                    <div className='dark:bg-containerDark dark:text-text-opacity bg-containerLight w-full max-w-2xl m-auto flex items-center justify-between p-4 text-sm  animate-tasksAnimate transition-colors duration-200 border-t-[.15px] border-[#e0dede49]'>
                        {list.map(el => <p key={el.current} className={`text-inherit dark:md:hover:text-gray-200 md:hover:text-gray-800 cursor-pointer md:hover:font-bold ${current === el.current ? 'block' : 'hidden'} capitalize`}>{el.current} ({el.type})</p>)}
                        < div className='w-full mt-4 py-4 items-center justify-center m-auto rounded-md md:max-w-2xl hidden lg:flex md:w-auto md:m-0 md:self-center text-textLight transition-colors duration-200'>
                            <StatusTask />
                        </div>
                        {tasksDone.length > 0 && <p className={`dark:md:hover:text-gray-200 md:hover:text-gray-800 transition-colors duration-200  cursor-pointer text-sm animate-tasksAnimate md:hover:font-bold`} onClick={() => setModal(!modal)}>Clear Completed</p>}

                    </div>
                </div >
                < div className='dark:bg-containerDark dark:text-textDark bg-containerLight text-textLight w-[90%] flex mt-4 py-4 items-center justify-center m-auto rounded-md  mb-8 md:py-5 lg:hidden animate-tasksAnimate transition-colors duration-200 md:max-w-2xl' >
                    <StatusTask />
                </div >
                {modal && <Modal setModal={setModal} type='all' />}
                <p className='text-center md:mt-8'>Drag and drop to reorder list</p>
            </div >

        </DragDropContext >
    )
}

export default HomePage