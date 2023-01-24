'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/themeConttext'
import moon from './../../assets/icon-moon.svg'
import sun from './../../assets/icon-sun.svg'
import InputTask from './InputTask'
const HeaderComponent = () => {
    const [darkTheme, setDarkTheme] = useState(false)

    /*    useEffect(() => {
            if (localStorage.getItem("theme") === 'true') {
                setDarkTheme(true)
    
                document.documentElement.classList.add('dark')
            } else {
                setDarkTheme(false)
                document.documentElement.classList.remove('dark')
            }
        }, [])*/

    const handleTheme = () => {
        if (darkTheme) {
            setDarkTheme(false)
            document.body.classList.remove('dark')
            localStorage.setItem('theme', false)
        } else {
            setDarkTheme(true)
            localStorage.setItem('theme', true)
            document.body.classList.add('dark')
        }
    }
    return (
        // <header className={`${DarkTheme ? 'bg-mobileDark md:bg-desktopDark' : ' bg-mobileLight md:bg-desktopLight'} bg-cover transition-all duration-500 bg-cover bg-no-repeat h-[30vh] w-full font-bold flex flex-col items-center`}>
        <header className='dark:bg-mobileDark dark:md:bg-desktopDark bg-mobileLight md:bg-desktopLight transition-all duration-500 bg-cover bg-no-repeat h-[30vh] w-full font-bold flex flex-col items-center' >
            <div className='flex flex-col justify-between items-center w-[90%] mt-12'>
                <div className='flex justify-between items-center w-full mb-4 '>
                    <h1 className='tracking-[.5rem] text-3xl text-white'>TODO</h1>
                    <Image onClick={handleTheme} src={darkTheme ? sun : moon} width={30} height={20} alt='icon_moon_darkMode' />
                </div >
                <InputTask isTask={false} />
            </div >
        </header >
    )
}

export default HeaderComponent