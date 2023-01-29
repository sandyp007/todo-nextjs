import React, { useContext } from 'react'
import taskContext from '../context/taskContext'

const ModalTaskAdded = ({ type, message }) => {

    const { handleShowTemporalModal } = useContext(taskContext)

    // const { type, message } = handleShowTemporalModal()

    // console.info(handleShowTemporalModal())
    return (
        <div className={`text-bodyLight ${type === 'error' ? 'bg-red-500' : ''} ${type === 'add' ? 'bg-green-500' : ''} ${type === 'edit' ? 'bg-[#d3b530ea]' : ''} px-4 py-2 rounded-md mb-0 w-full text-center`}>{
            message
        }</div>
    )
}

export default ModalTaskAdded