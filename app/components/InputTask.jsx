'use client'
import React, { useContext, useState } from 'react'
import ThemeContext from '../context/themeConttext'
import cross from './../../assets/icon-cross.svg'
import Image from 'next/image'
import taskContext from '../context/taskContext'

const InputTask = ({ isTask = true, children }) => {

    const { addTask } = useContext(taskContext)
    const [isCheck, setIsCheck] = useState(false)
    const [task, setTask] = useState("")
    console.info(isTask)

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(task)
        setTask('')
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const { DarkTheme } = useContext(ThemeContext)

    return (
        <>
            {isTask
                ?
                // <div className={`${DarkTheme ? 'border-white' : 'border-[#25273c]'} border-b-[1px]`}>
                <div className={`${DarkTheme ? 'bg-[#25273C] text-white b ' : 'bg-white text-[#25273c] '} w-full group py-4 outline-none flex items-center border-b-[1px] animate-tasksAnimate `}>
                    <input onClick={() => setIsCheck(!isCheck)} type='button' className={`${isCheck ? 'bg-blue-500 border-white' : 'bg-white border-[#25273c]'} border-b-[1px] w-6 h-6 rounded-full inline-block ml-4 mr-4 border-gray-400 border-[1px] transition-all duration-300`} />
                    <div className='flex items-center justify-between h-auto min-h-[20px] w-[calc(100%-3.5rem)] '>
                        <span className='flex h-auto items-center w-[calc(100%-3.25rem)]'>
                            {children}
                        </span>
                        <Image className='md:hidden md:group-hover:block md:group-hover:cursor-pointer mr-4' src={cross} width={20} height={20} alt='delete task' />
                    </div>
                </div>                // </div>
                :
                <form className={`${DarkTheme ? 'bg-[#25273c] text-white' : 'bg-white text-[#25273c]'} w-full flex items-center justify-between rounded-md overflow-hidden transition-all duration-300`} onSubmit={handleSubmit}>
                    < input type='button' className={`bg-white w-6 h-6 rounded-full inline-block ml-4 border-gray-400 border-[1px] transition-all duration-300`} disabled />
                    <input onChange={(e) => handleChange(e)} type="text" className={`${DarkTheme ? 'bg-[#25273c] text-white' : 'bg-white text-[#25273c]'} w-[calc(100%-3rem)] py-4 px-3 text-xs outline-none transition-all duration-300`} value={task} placeholder='Creste a new task...' />

                </form>
            }
            {/* <input onChange={(e) => handleChange(e)} onClick={() => setTask('')} type="text" className={`${DarkTheme ? 'bg-[#25273c] text-white' : 'bg-white text-[#25273c]'} w-[calc(100%-3rem)] py-4 px-3 text-xs outline-none transition-all duration-300`} value={task} /> */}

            {/* {
                isTask
                    ?
                    <div className={`${DarkTheme ? 'bg-[#25273C] text-white ' : 'bg-white text-[#25273c] '} w-[calc(100%-2.5rem)] group py-4 px-4 text-xs outline-none transition-all duration-300 flex`}>
                        <input onClick={() => setIsCheck(!isCheck)} type='button' className={`${isCheck ? 'bg-blue-500 border-white' : 'bg-white border-[#25273c]'} border-b-[1px] w-6 h-6 rounded-full inline-block ml-4 border-gray-400 border-[1px] transition-all duration-300`} />
                        <div className='flex items-center justify-between min-h-[20px]'>
                            <span className='w-[calc(100%-25px)] flex h-auto items-center'>
                                {children}
                            </span>
                            <Image className='md:hidden md:group-hover:block md:group-hover:cursor-pointer ml-4' src={cross} width={20} height={20} alt='delete task' />
                        </div>
                    </div>
                    : <input onChange={(e) => handleChange(e)} type="text" className={`${DarkTheme ? 'bg-[#25273c] text-white' : 'bg-white text-[#25273c]'} w-[calc(100%-3rem)] py-4 px-3 text-xs outline-none transition-all duration-300`} value={task} placeholder='Creste a new task...' />

            } */}

        </>
    )
}


export default InputTask