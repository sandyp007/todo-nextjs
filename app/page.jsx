'use client'
import React, { useContext, useState } from 'react'
import '../styles/globals.css'
import HeaderComponent from './components/Header'
import InputTask from './components/InputTask'
import taskContext from './context/taskContext'
import ModalDeleteTask from './components/ModalDeleteTask'
import { Josefin_Sans } from '@next/font/google'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import ModalTaskAdded from './components/ModalTaskAdded'

const josefin = Josefin_Sans({
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"]
})
const HomePage = () => {
    const [modal, setModal] = useState(false)
    const { dbTasks, handleUpdateDragAndDrop, current, setCurrent, pendingTask, tasksDone, filteredData, taskAdded } = useContext(taskContext)

    return (
        <DragDropContext onDragEnd={result => handleUpdateDragAndDrop(result)}>
            <div className={`dark:bg-bodyDark dark:text-textDark bg-bodyLight text-textLight ${josefin.className} transition-colors duration-200  min-h-screen w-full h-full pb-24`}>
                <HeaderComponent />
                <div className='dark:bg-containerDark dark:text-textDark bg-bodyLight text-textLight w-[90%] m-auto -mt-6 overflow-hidden rounded-md flex items-center justify-center divide-[#d1cece] flex-col transition-all duration-200 md:max-w-2xl' >
                    <Droppable droppableId='tasks'>
                        {(droppableProvided) =>
                            <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className='w-full divide-y flex flex-col flex-wrap'>
                                {filteredData.length > 0 ? filteredData.map((tsk, index) =>
                                    <Draggable key={tsk.id} draggableId={tsk.id} index={index}>
                                        {(draggableProvided) =>
                                            <span ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps}>
                                                <InputTask id={tsk.id} isDone={tsk.isDone} content={tsk.content}>
                                                    {tsk.content}
                                                </InputTask>
                                            </span>
                                        }
                                    </Draggable>) :

                                    <p className='py-4 text-center'>{`${current === 'completed' ? 'You have not completed any tasks 🥹' : 'Add a new task '}`}</p>
                                }
                                {/* {droppableProvided.placeholder} */}
                            </div>
                        }
                    </Droppable>
                    <div className='dark:bg-containerDark bg-containerLight w-full flex items-center justify-between p-4 md:py-5 animate-tasksAnimate transition-colors duration-200 border-t-[.15px] border-[#e0dede49]'>
                        {current === 'all' ? <><p className='dark:text-textDark text-inherit dark:md:hover:text-gray-200 md:hover:text-gray-800 cursor-pointer text-sm'> All Items ({dbTasks.length})</p> </> : null}
                        {current === 'active' ? <><p className='dark:text-textDark text-inherit dark:md:hover:text-gray-200 md:hover:text-gray-800 cursor-pointer text-sm'>{pendingTask.length} Items left</p> </> : null}
                        {current === 'completed' ? <><p className='dark:text-textDark text-inherit dark:md:hover:text-gray-200 md:hover:text-gray-800 cursor-pointer text-sm'>{tasksDone.length} Items completed</p> </> : null}
                        <div className='w-full mt-4 py-4 items-center justify-center m-auto rounded-md  md:max-w-2xl  md:py-5 hidden lg:flex md:w-auto md:m-0 md:hover:text-gray-800 text-sm md:self-center transition-colors duration-200 '>
                            <p onClick={() => setCurrent('all')} className={`${current === 'all' ? 'text-blue-500  dark:text-blue-500' : 'text-inherit'} dark:md:hover:text-gray-200 md:hover:text-gray-800 cursor-pointer text-sm`}>All</p>
                            <p onClick={() => setCurrent('active')} className={`${current === 'active' ? 'text-blue-500  dark:text-blue-500' : 'text-inherit'} dark:md:hover:text-gray-200 md:hover:text-gray-800 ml-4 mr-4 cursor-pointer`}>Active</p>
                            <p onClick={() => setCurrent('completed')} className={`${current === 'completed' ? 'text-blue-500  dark:text-blue-500' : 'text-inherit'} dark:md:hover:text-gray-200 cursor-pointer`}>Completed</p>
                        </div>
                        {tasksDone.length > 0 && <p className={` dark:text-textDark text-textLight dark:md:hover:text-gray-200 md:hover:text-gray-800  cursor-pointer text-sm animate-tasksAnimate`} onClick={() => setModal(!modal)}>Clear Completed</p>}

                    </div>
                </div >
                < div className='dark:bg-containerDark dark:text-textDark bg-containerLight text-textLight w-[90%] flex mt-4 py-4 items-center justify-center m-auto rounded-md  mb-8 md:py-5 lg:hidden animate-tasksAnimate transition-colors duration-200 md:max-w-2xl font-bold' >
                    < p onClick={() => setCurrent('all')} className={`${current === 'all' ? 'text-blue-500  dark:text-blue-500' : 'text-inherit'} cursor-pointer text-sm`}> All</p >
                    < p onClick={() => setCurrent('active')} className={`${current === 'active' ? 'text-blue-500  dark:text-blue-500' : 'text-inherit'} ml-4 mr-4 cursor-pointer text-sm`}> Active</p >
                    < p onClick={() => setCurrent('completed')} className={`${current === 'completed' ? 'text-blue-500 dark:text-blue-500' : 'text-inherit'} cursor-pointer text-sm`}> Completed</p >
                </div >
                {modal && <ModalDeleteTask setModal={setModal} type='all' />}
                <p className='text-center'>Drag and drop to reorder list</p>
            </div >

        </DragDropContext>
    )
}

export default HomePage