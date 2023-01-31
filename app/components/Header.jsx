'use client'
import Image from 'next/image'
import React, { useLayoutEffect, useState } from 'react'
import moon from './../../assets/icon-moon.svg'
import sun from './../../assets/icon-sun.svg'
import InputTask from './InputTask'
const HeaderComponent = () => {
    const [darkTheme, setDarkTheme] = useState(false)
    useLayoutEffect(() => {
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

    return (
        <>
            <head>
                <meta name="theme-color" content={darkTheme ? '#171723' : '#F8F8FA'} />
            </head>

            <header className='dark:bg-mobileDark dark:md:bg-desktopDark bg-mobileLight md:bg-desktopLight transition-all duration-200 bg-cover bg-no-repeat min-h-[20vh] w-full flex flex-col items-center' >
                <div className='flex flex-col justify-between items-center w-[90%] mt-12 md:max-w-2xl mb-12' >
                    <div className='flex justify-between items-center w-full mb-4 '>
                        <h1 className='tracking-[.5rem] text-3xl md:text-4xl text-containerLight font-bold'>TODO</h1>
                        <Image onClick={handleTheme} className='md:cursor-pointer' src={darkTheme ? sun : moon} width={30} height={20} alt='icon_moon_darkMode' />
                    </div >
                    <InputTask isTask={false} />
                </div >
            </header >
        </>
    )
}

export default HeaderComponent