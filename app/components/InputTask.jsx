'use client'
import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/themeConttext'
import cross from './../../assets/icon-cross.svg'
import Image from 'next/image'
import taskContext from '../context/taskContext'
import ModalDeleteTask from './ModalDeleteTask'

const InputTask = ({ isTask = true, children, id, isDone }) => {

    const { handleAddTask, handleUpdateTask } = useContext(taskContext)
    const [isCheck, setIsCheck] = useState(isDone)
    const [task, setTask] = useState("")
    const [modalTask, setModalTask] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddTask(task)
        setTask('')
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    useEffect(() => {
        handleUpdateTask(id, isCheck, 'done')
    }, [isCheck])

    const { DarkTheme } = useContext(ThemeContext)

    return (
        <>
            {modalTask && <ModalDeleteTask setModalTask={setModalTask} id={id} type='one' />}

            {isTask
                ?
                <div className={`${DarkTheme ? 'bg-[#25273C] text-white outline-white' : 'bg-gray-100 text-[#25273c] outline-[#25273c]'} w-full group outline-2 outline-offset-2 flex items-center  justify-between animate-tasksAnimate py-4`}>
                    <input onClick={() => setIsCheck(!isCheck)} type='button' className={`${isCheck ? 'bg-blue-500 border-white' : 'bg-white border-[#25273c]'} border-b-[1px] w-6 h-6 rounded-full inline-block ml-4 mr-4 border-gray-400 border-[1px] transition-all duration-300`} />
                    <p className={`${isCheck ? 'text-gray-400 line-through' : null} block break-all text-sm w-[calc(100%-7rem)]`}>
                        {children}
                    </p>
                    <Image id={id} onClick={() => setModalTask(true)} className='md:hidden md:group-hover:block md:group-hover:cursor-pointer ml-4 mr-4' src={cross} width={20} height={20} alt='delete task' />
                </div >
                :
                <form className={`${DarkTheme ? 'bg-[#25273c] text-white' : 'bg-white text-[#25273c]'} w-full flex items-center justify-between rounded-md overflow-hidden transition-all duration-300`} onSubmit={handleSubmit}>
                    <input type='button' className={`bg-white w-6 h-6 rounded-full inline-block ml-4 border-gray-400 border-[1px] transition-all duration-300`} disabled />
                    <input onChange={(e) => handleChange(e)} type="text" className={`${DarkTheme ? 'bg-[#25273c] text-white' : 'bg-white text-[#25273c]'} w-[calc(100%-3rem)] py-4 px-3 text-xs outline-none transition-all duration-300`} value={task} placeholder='Create a new task...' />
                </form>
            }
        </>
    )
}


export default InputTask