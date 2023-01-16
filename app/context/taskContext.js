'use client'
import { createContext, useState } from "react"

const taskContext = createContext()
const TaskProvider = ({ children }) => {
    const localComments = JSON.parse(localStorage.getItem('dbTasks'))

    const [dbTasks, setDbTasks] = useState(localComments === null || localComments === 'undefined' ? [] : localComments)


    console.info(dbTasks)
    const addTask = (task) => {
        const newTask = {
            id: crypto.randomUUID(),
            content: task,
            done: false
        }
        setDbTasks([...dbTasks, newTask])
    }
    localStorage.setItem("dbTasks", JSON.stringify(dbTasks))


    const data = { dbTasks, addTask }
    return (<taskContext.Provider value={data}>
        {children}
    </taskContext.Provider>)
}

export { TaskProvider }
export default taskContext