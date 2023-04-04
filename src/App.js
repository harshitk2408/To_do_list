import { useReducer, useState } from 'react'
import './App.css'
import AddTasks from './components/AddTaks'
import TaskList from './components/TaskList'
function App() {
    console.log("App")
    const taskReducer = (tasks, action) => {
        switch (action.type) {
            case "ADD":
                let newtask = [...tasks]
                newtask.push(action.payload)
                return newtask
            case "DELETE":
                const ind = tasks.findIndex((t) => { return t.name === action.payload.name })
                console.log(ind)
                return tasks.filter((task) => task.name !== action.payload.name)
            case "UP":
                const indup = tasks.findIndex((t) => { return t.name === action.payload.name })
                console.log(indup)
                return [...tasks.slice(0, indup - 1), action.payload, tasks[indup - 1], ...tasks.slice(indup + 1, tasks.length)]
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