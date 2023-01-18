'use client'
import React, { useContext, useState } from 'react'
import ThemeContext from '../context/themeConttext'
import cross from './../../assets/icon-cross.svg'
import Image from 'next/image'
import taskContext from '../context/taskContext'
import ModalDeleteTask from './ModalDeleteTask'

const InputTask = ({ isTask = true, children, id }) => {

    const { handleAddTask, handlDeleteTask } = useContext(taskContext)
    const [isCheck, setIsCheck] = useState(false)
    const [task, setTask] = useState("")
    const [modalTask, setModalTask] = useState(false)
    //  console.info(isTask)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddTask(task)
        setTask('')
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const { DarkTheme } = useContext(ThemeContext)

    return (
        <>
            {modalTask && <ModalDeleteTask setModalTask={setModalTask} id={id} type='one' />}

            {isTask
                ?
                // <div className={`${DarkTheme ? 'border-white' : 'border-[#25273c]'} border-b-[1px]`}>
                <div className={`${DarkTheme ? 'bg-[#25273C] text-white outline-white' : 'bg-gray-100 text-[#25273c] outline-[#25273c]'} w-full group outline-2 outline-offset-2 flex items-center animate-tasksAnimate mb-2`}>
                    <input onClick={() => setIsCheck(!isCheck)} type='button' className={`${isCheck ? 'bg-blue-500 border-white' : 'bg-white border-[#25273c]'} border-b-[1px] w-6 h-6 rounded-full inline-block ml-4 mr-4 border-gray-400 border-[1px] transition-all duration-300`} />
                    <div className='flex w-[calc(100%-3.5rem)] items-center min-h-[36px] justify-between'>
                        <span className='block w-[calc(100%-3.25rem)]'>
                            <p className='break-words p-0 m-0'>
                                {
                                    children
                                }                            </p>
                        </span>
                        <Image id={id} onClick={() => setModalTask(true)} className='md:hidden md:group-hover:block md:group-hover:cursor-pointer mr-4' src={cross} width={20} height={20} alt='delete task' />
                    </div>
                </div >                // </div>
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