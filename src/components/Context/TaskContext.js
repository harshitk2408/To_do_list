
import { createContext } from "react";

const TaskContext = createContext((tasks, action) => {
    let ind
    switch (action.type) {
        case "ADD":
            let newtask = [...tasks]
            newtask.push(action.payload)
            return newtask
        case "DELETE":
            return tasks.filter((task) => task.name !== action.payload.name)
        case "UP":
            ind = tasks.findIndex((t) => { return t.name === action.payload.name })
            if (ind > 0) return [...tasks.slice(0, ind - 1), action.payload, tasks[ind - 1], ...tasks.slice(ind + 1, tasks.length)]
            else {
                return tasks
            }
        case "DOWN":
            ind = tasks.findIndex((t) => { return t.name === action.payload.name })
            if (ind < tasks.length - 1) return [...tasks.slice(0, ind), tasks[ind + 1], action.payload, ...tasks.slice(ind + 2, tasks.length)]
            else {
                return tasks
            }
        case "CHECK":
            let newTasks = []
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].name === action.payload.name) {
                    newTasks.push({ ...tasks[i], done: !action.payload.done })
                }
                else {
                    newTasks.push(tasks[i])
                }
            }
            // if (typeof window !== undefined) {
            //     localStorage.setItem("tasks",
            //         JSON.stringify(newTasks)
            //     )
            // }
            return newTasks
        default:
            return tasks
    }
});

export default TaskContext;