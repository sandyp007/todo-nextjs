import React from 'react'

const ButtonSendTask = ({ handleSubmit }) => {
    return (
        <button className='mr-4' onClick={(e) => handleSubmit(e)}>
            Add Task
        </button>
    )
}

export default ButtonSendTask