'use client'
import { createContext, useState, useEffect } from "react"

const taskContext = createContext()
const TaskProvider = ({ children }) => {

    let localComments
    if (typeof window !== "undefined") {
        // Perform localStorage action
        //localStorage.setItem("dbTasks", JSON.stringify(dbTasks))
        localComments = JSON.parse(localStorage.getItem('dbTasks'))
    }

    const [dbTasks, setDbTasks] = useState(localComments === null || localComments === undefined ? [] : localComments)
    const [tasksDone, setTasksDone] = useState([])
    const [pendingTask, setPendingTask] = useState([])
    const [current, setCurrent] = useState('all')

    useEffect(() => {
        const done = []
        const pending = []
        dbTasks.map(el => el.isDone === true ? done.push(el) : pending.push(el))

        setPendingTask(pending)
        setTasksDone(done)
    }, [dbTasks])

    const handleAddTask = (task) => {
        const newTask = {
            id: crypto.randomUUID(),
            content: task,
            isDone: false
        }
        setDbTasks([...dbTasks, newTask])
    }

    const handleDeleteTask = (id) => {
        // console.info(id)

        const filterID = dbTasks.filter(el => el.id !== id)

        setDbTasks(filterID)
    }


    const handleUpdateTask = (id, status, type) => {

        // console.info(id)
        if (type === 'done') {
            let update = dbTasks.map(el => el.id === id ? { ...el, isDone: status } : el)

            // console.info(update)
            setDbTasks(update)
        }


    }


    if (typeof window !== "undefined") {
        // Perform localStorage action
        localStorage.setItem("dbTasks", JSON.stringify(dbTasks))
    }

    const data = { dbTasks, handleAddTask, handleDeleteTask, handleUpdateTask, tasksDone, setTasksDone, pendingTask, setPendingTask, current, setCurrent }
    return (<taskContext.Provider value={data}>
        {children}
    </taskContext.Provider>)
}

export { TaskProvider }
export default taskContext