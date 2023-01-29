import React, { useContext } from 'react'
import taskContext from '../context/taskContext'

const StatusTask = () => {
    const { current, setCurrent } = useContext(taskContext)

    return (
        <>
            < p onClick={() => setCurrent('all')} className={`${current === 'all' ? 'text-active  dark:text-blue-500' : 'text-inherit'} cursor-pointer text-sm dark:md:hover:text-gray-200 md:hover:text-bodyDark md:hover:font-bold`}> All</p >
            < p onClick={() => setCurrent('active')} className={`${current === 'active' ? 'text-active  dark:text-blue-500' : 'text-inherit'} ml-4 mr-4 cursor-pointer text-sm dark:md:hover:text-gray-200 md:hover:text-bodyDark md:hover:font-bold`}> Active</p >
            < p onClick={() => setCurrent('completed')} className={`${current === 'completed' ? 'text-active dark:text-blue-500' : 'text-inherit'} cursor-pointer text-sm dark:md:hover:text-gray-200 md:hover:text-bodyDark md:hover:font-bold`}> Completed</p >

        </>)
}

export default StatusTask