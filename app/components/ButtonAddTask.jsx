import React from 'react'

const ButtonAddTask = ({ handleSubmit }) => {
    return (
        <button className='mr-4 active:translate-y-1 transition-transform duration-100' onClick={(e) => {
            handleSubmit(e)
        }}>
            Add Task
        </button>
    )
}

export default ButtonAddTask