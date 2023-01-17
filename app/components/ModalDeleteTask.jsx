import React, { useContext } from 'react'
import taskContext from '../context/taskContext'

const ModalDeleteTask = ({ setModalTask, id }) => {
    const { handleDeleteTask } = useContext(taskContext)
    return (
        <div className='fixed z-50 top-0 left-0 h-[100vh] w-full flex items-center justify-center'>
            <div className='absolute rounded-2xl flex flex-col items-center justify-center bg-white p-7 w-96 '>
                <h1 className='text-3xl font-bold'>Delete All Tasks</h1>
                <p>
                    Are you sure you want to delete this taks? This will remove the
                    comment and can't be undone.
                </p>
                <div className='flex justify-between w-full mt-3'>
                    <button className='text-base font-bold p-3 rounded-md cursor-pointer w-2/5 bg-gray-600 text-white' onClick={() => setModalTask(false)}>
                        NO, CANCEL
                    </button>
                    <button
                        className='text-base font-bold p-3 rounded-md cursor-pointer w-2/5 bg-red-600 text-white'
                        onClick={() => handleDeleteTask(id)}
                    >
                        YES, DELETE
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ModalDeleteTask