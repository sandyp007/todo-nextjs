import React, { useContext } from 'react'
import taskContext from '../context/taskContext'
import ThemeContext from '../context/themeConttext'

const ModalDeleteTask = ({ setModalTask, id, type }) => {
    const { handleDeleteTask } = useContext(taskContext)
    const { DarkTheme } = useContext(ThemeContext)
    return (
        <div className='bg-[#2c2c2c9f] fixed z-50 top-0 left-0 h-[100vh] w-full flex items-center justify-center'>
            {/* <div className='absolute rounded-2xl flex flex-col items-center justify-center bg-white p-7 w-96 '> */}
            <div className={`${DarkTheme ? 'bg-[#25273c] text-white' : 'bg-white text-[#25273c]'} absolute rounded-2xl flex flex-col items-center justify-center bg-white p-7 w-[95%]`}>
                <h1 className='text-3xl font-bold'>{type === 'one' ? 'Delete Task' : 'Delete All Task'}</h1>
                <p>
                    Are you sure you want to delete this taks? This will remove the
                    comment and can't be undone.
                </p>
                <div className='flex justify-between w-full gap-3 mt-3'>
                    <button className='text-base font-bold p-3 rounded-md cursor-pointer w-2/3 bg-gray-600 text-white' onClick={() => setModalTask(false)}>
                        NO, CANCEL
                    </button>
                    <button
                        className='text-base font-bold p-3 rounded-md cursor-pointer w-2/3 bg-red-600 text-white'
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