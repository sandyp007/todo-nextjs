import React, { useContext } from 'react'
import taskContext from '../context/taskContext'

const ButtonSendTask = ({ handleSubmit }) => {
    const { setTaskAdded } = useContext(taskContext)

    return (
        <button className='mr-4' onClick={() => {
            setTaskAdded(true)
            handleSubmit()
        }}>
            Add Task
        </button>
    )
}

export default ButtonSendTask