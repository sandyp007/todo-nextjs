'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import ThemeContext from '../context/themeConttext'
import moon from './../../assets/icon-moon.svg'
import sun from './../../assets/icon-sun.svg'
import InputTask from './InputTask'
const HeaderComponent = () => {
    const { DarkTheme, handleTheme } = useContext(ThemeContext)
    return (
        <header className={`${DarkTheme ? 'bg-mobileDark md:bg-desktopDark' : ' bg-mobileLight md:bg-desktopLight'} transition-all duration-500 bg-cover bg-no-repeat h-[30vh] w-full font-bold flex flex-col items-center`}>
            <div className='flex flex-col justify-between items-center w-[90%] mt-12'>
                <div className='flex justify-between items-center w-full mb-4 '>
                    <h1 className='tracking-[.5rem] text-3xl text-white'>TODO</h1>
                    <Image onClick={handleTheme} src={DarkTheme ? sun : moon} width={30} height={20} alt='icon_moon_darkMode' />
                </div>
                <InputTask isTask={false} />
                {/* <InputTask /> */}
                {/* <InputTask /> */}
            </div>
        </header>
    )
}

export default HeaderComponent