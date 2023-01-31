import React, { useContext } from 'react'
import taskContext from '../context/taskContext'

const Modal = ({ setModalTask, id, type, setModal }) => {
    const { dbTasks, handleDeleteTask } = useContext(taskContext)

    const lenghtCompleted = dbTasks.filter(el => el.isDone === true)

    return (
        <div className='bg-[#2c2c2c9f] fixed z-50 top-0 left-0 h-[100vh] w-full flex items-center justify-center'>
            <div className='dark:bg-containerDark dark:text-textDark bg-containerLight text-textLight absolute rounded-2xl flex flex-col items-center justify-center p-7 w-[95%] md:max-w-md'>
                <h1 className='text-3xl font-bold'>{type === 'one' ? 'Delete Task' : `Delete ${lenghtCompleted.length} Task`}</h1>
                <p>
                    {type === 'one' ? "Are you sure you want to delete this take? This will delete the task and cannot be undone." : `Are you sure you want to delete ${lenghtCompleted.length} completed tasks? This will delete the tasks and cannot be undone.`}
                </p>
                <div className='flex justify-between w-full gap-3 mt-3'>
                    <button className='text-base font-bold p-3 rounded-md cursor-pointer w-2/3 bg-gray-600 text-white' onClick={() => !id ? setModal(false) : setModalTask(false)}>
                        NO, CANCEL
                    </button>
                    <button
                        className='text-base font-bold p-3 rounded-md cursor-pointer w-2/3 bg-red-600 text-white'
                        onClick={() => {

                            !id ? setModal(false) : setModalTask(false)
                            handleDeleteTask(id, type)
                        }
                        }
                    >
                        YES, DELETE
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modal