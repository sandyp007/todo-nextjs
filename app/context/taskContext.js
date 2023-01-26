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

    const handleDeleteTask = (id, type) => {

        type === 'all' ? setDbTasks(dbTasks.filter(el => el.isDone !== true)) : setDbTasks(dbTasks.filter(el => el.id !== id))
        // const filterID = dbTasks.filter(el => el.id !== id)

        // setDbTasks(filterID)
    }


    const handleUpdateTask = (id, status, type, content) => {

        if (type === 'done') {
            let update = dbTasks.map(el => el.id === id ? { ...el, isDone: status } : el)

            setDbTasks(update)
        } else {
            let updateText = dbTasks.map(el => el.id === id ? { ...el, content: content, isDone: false } : el)

            setDbTasks(updateText)
        }


    }
    const getFilter = () => {
        if (current === 'all' || current === '') {
            return dbTasks
        }

        if (current === 'active') {
            return pendingTask
        }

        if (current === 'completed') {
            return tasksDone
        }
    }

    const filteredData = getFilter()

    if (typeof window !== "undefined") {
        // Perform localStorage action
        localStorage.setItem("dbTasks", JSON.stringify(dbTasks))
    }

    const reorderData = (list, startIndex, endIndex) => {
        const result = [...list]

        const [removed] = result.splice(startIndex, 1)

        result.splice(endIndex, 0, removed)

        return result
    }


    const handleUpdateDragAndDrop = result => {
        //console.info(result)
        const { destination, source } = result

        if (!destination) return

        if (source.index === destination.index && source.droppableId === destination.droppableId) return


        current === 'all' && setDbTasks(prevTasks => reorderData(prevTasks, source.index, destination.index))
        current === 'active' && setPendingTask(prevTasks => reorderData(prevTasks, source.index, destination.index))
        current === 'completed' && setTasksDone(prevTasks => reorderData(prevTasks, source.index, destination.index))

        // setDbTasks(prevTasks => reorderData(prevTasks, source.index, destination.index))

    }
    const data = { dbTasks, handleUpdateDragAndDrop, handleAddTask, handleDeleteTask, handleUpdateTask, tasksDone, setTasksDone, pendingTask, setPendingTask, current, setCurrent, filteredData }
    return (<taskContext.Provider value={data}>
        {children}
    </taskContext.Provider>)
}

export { TaskProvider }
export default taskContext