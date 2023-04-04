import { useReducer, useState } from 'react'
import './App.css'
import AddTasks from './components/AddTaks'
import TaskList from './components/TaskList'
function App() {
    console.log("App")
    const taskReducer = (tasks, action) => {
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
                    alert("High priority")
                    return tasks
                }
            case "DOWN":
                ind = tasks.findIndex((t) => { return t.name === action.payload.name })
                if (ind < tasks.length - 1) return [...tasks.slice(0, ind), tasks[ind + 1], action.payload, ...tasks.slice(ind + 2, tasks.length)]
                else {
                    alert("Low priority")
                    return tasks
                }
            default:
                return tasks
        }
    }
    const [tasks, dispatch] = useReducer(taskReducer, [{
        id: 1,
        name: "To do",
        done: false
    },
    {
        id: 2,
        name: "Work",
        done: false
    }
    ])
    const [check, setCheck] = useState(tasks.filter((t) => t.done === true).length)
    return (
        <>
            <AddTasks dispatch={dispatch} check={check} tasks={tasks} />
            <TaskList dispatch={dispatch} tasks={tasks} setCheck={setCheck} check={check} />
        </>
    )
}
export default App