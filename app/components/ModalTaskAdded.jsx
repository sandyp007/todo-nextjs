import React, { useContext } from 'react'
import taskContext from '../context/taskContext'

const ModalTaskAdded = () => {

    const { taskAdded } = useContext(taskContext)

    console.info(taskAdded)
    return (
        <div className={`text-bodyLight ${taskAdded.type === 'error' ? 'bg-red-500' : ''} ${taskAdded.type === 'add' ? 'bg-blue-500' : ''} ${taskAdded.type === 'edit' ? 'bg-[#d3b530ea]' : ''} px-4 py-2 rounded-md mb-12`}>{
            taskAdded.message
        }</div>
    )
}

export default ModalTaskAdded