import { useContext, useReducer, useState } from 'react'
import './App.css'
import AddTasks from './components/AddTaks'
import TaskContext from './components/Context/TaskContext'
import TaskList from './components/TaskList'
function App() {
    console.log("App")
    // const [taskslist, setTasklist] = useState({

    // })
    const Taskfunc = useContext(TaskContext)
    // const fetch = () => {
    //     if (typeof window !== undefined) {
    //         const data = localStorage.getItem("tasks")
    //         setTasklist(
    //             JSON.stringify(data)
    //         )
    //         console.log(taskslist)

    //     }
    // }

    const [tasks, dispatch] = useReducer(Taskfunc, [])
    console.log(tasks)
    const [check, setCheck] = useState(tasks.filter((t) => t.done === true).length)
    return (
        <div className="container">
            <AddTasks dispatch={dispatch} check={check} tasks={tasks} />
            <TaskList dispatch={dispatch} tasks={tasks} setCheck={setCheck} check={check} />
        </div>
    )
}
export default App