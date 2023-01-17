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

    const handleAddTask = (task) => {
        const newTask = {
            id: crypto.randomUUID(),
            content: task,
            done: false
        }
        setDbTasks([...dbTasks, newTask])
    }

    const handleDeleteTask = (id) => {
        console.info(id)

        const filterID = dbTasks.filter(el => el.id !== id)

        setDbTasks(filterID)
    }

    if (typeof window !== "undefined") {
        // Perform localStorage action
        localStorage.setItem("dbTasks", JSON.stringify(dbTasks))
    }

    const data = { dbTasks, handleAddTask, handleDeleteTask }
    return (<taskContext.Provider value={data}>
        {children}
    </taskContext.Provider>)
}

export { TaskProvider }
export default taskContext