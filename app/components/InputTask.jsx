import React, { useContext, useEffect, useState } from 'react'
import taskContext from '../context/taskContext'
import ModalDeleteTask from './ModalDeleteTask'
import check from './../../assets/icon-check.svg'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import Image from 'next/image'
const InputTask = ({ isTask = true, children, id, isDone, content }) => {

    const { handleAddTask, handleUpdateTask } = useContext(taskContext)
    const [isCheck, setIsCheck] = useState(isDone)
    const [task, setTask] = useState("")
    const [modalTask, setModalTask] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task === '') return
        if (isEdit && task !== '') {
            setIsEdit(false)
            setIsCheck(false)
            handleUpdateTask(id, isCheck, 'edit', task)
        } else {
            handleAddTask(task)
            setTask('')
        }
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    useEffect(() => {
        handleUpdateTask(id, isCheck, 'done', content)
    }, [isCheck])


    return (
        <>
            {modalTask && <ModalDeleteTask setModalTask={setModalTask} id={id} type='one' />}

            {isTask
                ?
                <div className='dark:bg-containerDark dark:text-textDark bg-containerLight text-textLight w-full group flex items-center transition-all duration-500 justify-between animate-tasksAnimate py-4'>
                    <span onClick={() => setIsCheck(!isCheck)} className={`${isCheck ? 'check' : 'bg-containerLight'} border-b-[1px] w-6 h-6 rounded-full ml-4 mr-4 border-textLight border-[1px] transition-all duration-300 flex items-center justify-center`}>
                        {isCheck && <Image src={check} width={15} height={15} alt='task_checked_icon' />}
                    </span>

                    {isEdit
                        ?
                        <>
                            <input autoFocus className='dark:bg-[#2f3041] dark:text-bodyLight bg-bodyLight text-textLight text-sm pr-2 outline-none break-all w-[calc(100%-7rem)]' onChange={e => handleChange(e)} type="text" value={task} />
                            <AiOutlineCheck onClick={handleSubmit} width={20} height={20} alt='edit task button' className='ml-2 md:group-hover:cursor-pointer transition-all duration-500' />

                        </>
                        :
                        <>
                            <p className={`${isCheck ? 'text-textDark line-through' : ''} text-justify block break-all text-sm w-[calc(100%-7rem)] `}>
                                {children}
                            </p>
                            <MdModeEditOutline width={20} height={20} alt='edit task button' className='ml-2 md:group-hover:cursor-pointer transition-colors duration-500'
                                onClick={() => {
                                    setIsEdit(true)
                                    setTask(content)
                                }} />
                        </>
                    }

                    <AiOutlineClose id={id} onClick={() => setModalTask(true)} className='md:opacity-0 md:group-hover:opacity-100 md:group-hover:cursor-pointer ml-2 mr-4' width={20} height={20} alt='delete task' />
                </div >
                :
                <form className='dark:bg-containerDark dark:text-textDark bg-containerLight text-textLight w-full flex items-center justify-between rounded-md overflow-hidden transition-colors duration-300 animate-tasksAnimate mb-8' onSubmit={handleSubmit}>
                    <input type='button' className={`w-6 h-6 rounded-full inline-block ml-4 border-textLight bg-containerLight dark:bg-containerDark border-[1px] transition-colors duration-300`} disabled />
                    <input onChange={(e) => handleChange(e)} type="text" onClick={() => setIsEdit(false)} className='dark:bg-containerDark dark:text-textDark bg-containerLight text-textLight w-[calc(100%-3rem)] py-4 px-3 text-xs outline-none transition-colors duration-300' value={task} placeholder='Create a new task...' />
                </form>
            }
        </>
    )
}


export default InputTask