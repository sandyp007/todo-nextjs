import React, { useContext, useEffect, useState } from 'react'
import taskContext from '../context/taskContext'
import ModalDeleteTask from './ModalDeleteTask'
import check from './../../assets/icon-check.svg'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import Image from 'next/image'
import ButtonSendTask from './ButtonSendTask'
import ModalTaskAdded from './ModalTaskAdded'
const InputTask = ({ isTask = true, children, id, isDone, content }) => {

    const { handleAddTask, handleUpdateTask, handleShowTemporalModal, handleSelectAllTask } = useContext(taskContext)
    const [isCheck, setIsCheck] = useState(isDone)
    const [task, setTask] = useState("")
    const [modalTask, setModalTask] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [textEdited, setTextEdited] = useState('')
    const [modalInTask, setModalInTask] = useState(false)
    const [taskAdded, setTaskAdded] = useState({ status: false, type: 'add', message: 'Hola' })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim() === '' || task == '') {
            setTask('')
            setModalInTask(true)
            // handleShowTemporalModal('error', 'Write a valid task')
            setTaskAdded({ status: true, type: 'error', message: 'write a valida task' })
            setTimeout(() => {
                setModalInTask(false)
            }, 3000);
            return
        }
        if (isEdit) {

            if (textEdited !== content && textEdited !== '') {
                setModalInTask(true)
                //  handleShowTemporalModal('edit', 'task updated succesfully')
                setIsEdit(false)
                setTaskAdded({ status: true, type: 'edit', message: 'task updated succesfully' })

                setIsCheck(false)
                handleUpdateTask(id, isCheck, 'edit', textEdited)
            } else {
                console.info("es igual")
                setModalInTask(true)
                setTaskAdded({ status: true, type: 'error', message: 'you not are write nothing' })

                //   handleShowTemporalModal('error', "you not are write nothing")
            }
        } else {
            setModalInTask(true)
            // handleShowTemporalModal('add', 'task added succesfully')
            setTaskAdded({ status: true, type: 'add', message: 'task added succesfully' })

            handleAddTask(task)
            setTask('')
        }

        setTimeout(() => {
            setModalInTask(false)
        }, 3000);
    }

    const handleChange = (e) => {
        setTask(e.target.value)

        console.info(content + e.target.value)
        if (content + e.target.value === task) {
            setIsEdit(false)
        }
    }

    useEffect(() => {
        handleUpdateTask(id, isCheck, 'done', content)
    }, [isCheck])



    return (
        <>
            {modalTask && <ModalDeleteTask setModalTask={setModalTask} id={id} type='one' />}

            {isTask
                ?
                <>
                    <div className='dark:bg-containerDark dark:text-textDark bg-containerLight text-textLight w-full group flex items-center transition-all duration-500 justify-between animate-tasksAnimate py-4'>
                        <span onClick={() => setIsCheck(!isCheck)} className={`${isCheck ? 'check' : 'bg-containerLight'} border-b-[1px] w-6 h-6 rounded-full ml-4 mr-4 border-textLight border-[1px] transition-all duration-300 flex items-center justify-center`}>
                            {isCheck && <Image src={check} width={15} height={15} alt='task_checked_icon' />}
                        </span>

                        {isEdit
                            ?
                            <>
                                <form onSubmit={(e) => handleSubmit(e)} className='dark:bg-[#2f3041] dark:text-bodyLight bg-bodyLight text-textLight text-sm pr-2 outline-none break-all w-[calc(100%-7rem)]'>
                                    <input autoFocus onBlur={() => setIsEdit(false)} className='dark:bg-[#2f3041] dark:text-bodyLight bg-bodyLight text-textLight text-sm pr-2 outline-none break-all w-[calc(100%-7rem)]' onChange={e => {
                                        if (e.target.value === task) {
                                            setIsEdit(false)
                                        }
                                        setTextEdited(e.target.value)
                                    }} type="text" value={textEdited === '' ? task : textEdited} />
                                </form>
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
                    {modalInTask && <ModalTaskAdded type={taskAdded.type} message={taskAdded.message} />}
                </>
                :
                <>
                    <form className='dark:bg-containerDark dark:text-textDark bg-containerLight text-textLight w-full flex items-center justify-between rounded-md overflow-hidden transition-colors duration-300 animate-tasksAnimate mb-8' onSubmit={handleSubmit}>
                        <input type='button' className={`w-6 h-6 rounded-full inline-block ml-4 border-textLight bg-containerLight dark:bg-containerDark border-[1px] transition-colors duration-300`} onClick={handleSelectAllTask} />
                        <input onChange={(e) => handleChange(e)}
                            type="text" className='dark:bg-containerDark dark:text-textDark bg-containerLight text-textLight w-[calc(100%-8rem)] py-4 px-3 text-xs outline-none transition-colors duration-300' value={task} placeholder='Create a new task...' />
                        <ButtonSendTask handleSubmit={handleSubmit} setTaskAdded={setTaskAdded} />
                    </form>
                    {modalInTask && <ModalTaskAdded type={taskAdded.type} message={taskAdded.message} />}

                </>
            }
        </>
    )
}


export default InputTask