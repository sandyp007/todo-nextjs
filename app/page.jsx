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
        <div className={`${DarkTheme ? 'bg-[#161722] text-white' : 'bg-white text-[#161722]'} transition-all duration-500 min-h-screen w-full`}>
            <HeaderComponent />

            <div className={`${DarkTheme ? 'bg-[#25273c] text-white' : 'bg-white text-[#25273c] '} gap-2 min-h-[3rem] w-[90%] m-auto -mt-6 overflow-hidden rounded-md`}>
                {dbTasks && dbTasks.length > 0
                    ? dbTasks.map(tsk => <InputTask key={tsk.id} id={tsk.id}>
                        <p>{tsk.content}</p>
                    </InputTask>)
                    : 'No tasks, add a task :D'}
            </div>
        </div>


    )
}

export default HomePage