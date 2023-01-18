'use client'
import React, { useContext } from 'react'
import HeaderComponent from './components/Header'
import '../styles/globals.css'
import ThemeContext from './context/themeConttext'
import InputTask from './components/InputTask'
import cross from '../assets/icon-cross.svg'
import Image from 'next/image'
import taskContext from './context/taskContext'
const HomePage = () => {

    const { dbTasks } = useContext(taskContext)
    const { DarkTheme } = useContext(ThemeContext)
    console.info(dbTasks, "taskks")
    return (
        <div className={`${DarkTheme ? 'bg-[#161722] text-white' : 'bg-white text-[#161722]'} transition-all duration-500  min-h-screen w-full h-full  pb-24`}>
            <HeaderComponent />

            <div className={`${DarkTheme ? 'bg-[#25273c] text-white outline-white' : 'bg-gray-100 text-[#25273c] outline-[#25273c]'} outline-1 outline-offset-1 min-h-[3rem] w-[90%] m-auto -mt-6 overflow-hidden rounded-md flex items-center justify-center  divide-y flex-col`}>
                {dbTasks && dbTasks.length > 0
                    ? dbTasks.map(tsk => <InputTask key={tsk.id} id={tsk.id}>
                        {tsk.content}
                    </InputTask>)
                    : 'No tasks, add a new task :D'}
            </div>
        </div>


    )
}

export default HomePage