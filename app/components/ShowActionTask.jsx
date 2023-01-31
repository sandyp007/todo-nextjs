import React from 'react'

const ShowActionTask = ({ type, message }) => {

    return (
        <div className={`text-bodyLight ${type === 'error' ? 'bg-red-500' : ''} ${type === 'add' ? 'bg-green-500' : ''} ${type === 'edit' ? 'bg-[#d3b530ea]' : ''} animate-tasksAnimate transition-opacity duration-100 px-4 py-2 rounded-md mb-0 w-full text-center`}>{
            message
        }</div>
    )
}

export default ShowActionTask