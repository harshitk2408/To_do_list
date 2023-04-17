import { useState } from "react"
import './../App.css'
function AddTask({ dispatch, check, tasks }) {
    const [task, setTask] = useState('')
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleAdd = (e) => {
        e.preventDefault()
        if (task === "") {
            alert("Enter a valid task")
        }
        else {
            dispatch({ type: "ADD", payload: { name: task, id: tasks.length + 1 } })
            setTask("")
        }
    }
    return (
        <div className="head">
            <h2>{tasks.length > 0 ? (check !== tasks.length ? Math.min(tasks.length, check) + "/" + tasks.length + " done" : check + "/" + tasks.length + " done. Well Done !!") : "Add Tasks..."}</h2>
            <form className="addtask">
                <input
                    className={task.length === 0 ? "taskaddbox" : "taskaddbox bluebg"}
                    type="text"
                    name="newTask"
                    value={task}
                    placeholder="Enter new task"
                    onChange={(e) => handleChange(e)}
                />
                <button onClick={(e) => handleAdd(e)}>
                    Add Task
                </button>
            </form>
        </div>
    )
}
export default AddTask