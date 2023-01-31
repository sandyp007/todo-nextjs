import React, { useContext } from 'react'
import taskContext from '../context/taskContext'

const StatusTask = () => {
    const { current, setCurrent } = useContext(taskContext)

    const status = ['all', 'active', 'completed']
    return (
        <>
            {status.map((el, index) => <p key={el + index} onClick={() => setCurrent(el)} className={`${current === el ? 'text-active  dark:text-blue-500' : 'text-inherit'} cursor-pointer text-sm dark:md:hover:text-gray-200 md:hover:text-bodyDark md:hover:font-bold capitalize mx-1`}>{el}</p>)}
        </>)
}

export default StatusTask