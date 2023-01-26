'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import taskContext from '../context/taskContext'
import ThemeContext from '../context/themeConttext'
import moon from './../../assets/icon-moon.svg'
import sun from './../../assets/icon-sun.svg'
import InputTask from './InputTask'
import ModalTaskAdded from './ModalTaskAdded'
const HeaderComponent = () => {
    const [darkTheme, setDarkTheme] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("theme") === 'true') {
            setDarkTheme(true)

            document.documentElement.classList.add('dark')
        } else {
            setDarkTheme(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const handleTheme = () => {
        if (darkTheme) {
            setDarkTheme(false)
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', false)
        } else {
            setDarkTheme(true)
            localStorage.setItem('theme', true)
            document.documentElement.classList.add('dark')
        }
    }

    const { taskAdded } = useContext(taskContext)
    return (
        <header className='dark:bg-mobileDark dark:md:bg-desktopDark bg-mobileLight md:bg-desktopLight transition-all duration-500 bg-cover bg-no-repeat min-h-[20vh] w-full font-bold flex flex-col items-center' >
            <div className='flex flex-col justify-between items-center w-[90%] mt-12 md:max-w-2xl' >
                <div className='flex justify-between items-center w-full mb-4 '>
                    <h1 className='tracking-[.5rem] text-3xl text-containerLight'>TODO</h1>
                    <Image onClick={handleTheme} className='md:cursor-pointer' src={darkTheme ? sun : moon} width={30} height={20} alt='icon_moon_darkMode' />
                </div >
                <InputTask isTask={false} />
                {taskAdded.status && <ModalTaskAdded />}

            </div >
        </header >
    )
}

export default HeaderComponent