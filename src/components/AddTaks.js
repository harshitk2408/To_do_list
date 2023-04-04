import { useState } from "react"

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
        <div>
            {check !== tasks.length ? check + "/" + tasks.length + " done" : check + "/" + tasks.length + " done. Well Done !!"}
            <form>
                <input
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