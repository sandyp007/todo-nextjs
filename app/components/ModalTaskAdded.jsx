import React, { useContext } from 'react'
import taskContext from '../context/taskContext'

const ModalTaskAdded = ({ bg, text }) => {

    const { taskAdded } = useContext(taskContext)
    return (
        <div className={`text-bodyLight bg-[#187949ea] ${taskAdded.type === 'error' ? 'bg-red-400' : ''} px-4 py-2 rounded-md mb-12`}>{
            taskAdded.message
        }</div>
    )
}

export default ModalTaskAdded