function TaskMake({ task, setCheck, check, dispatch }) {
    console.log("TaskMake working")
    const handleCheck = (task) => {
        setCheck(check + (task.done ? -1 : 1))
        console.log(task)
        dispatch({
            type: "CHECK", payload: {
                name: task.name, done: task.done
            }
        })
    }
    const handleDown = (task) => {
        dispatch({ type: "DOWN", payload: { name: task.name, id: task.id, done: task.done } })
    }
    const handleUp = (task) => {
        dispatch({ type: "UP", payload: { name: task.name, id: task.id, done: task.done } })
    }
    const handleX = (task) => {
        dispatch({ type: "DELETE", payload: { name: task.name, id: task.id, done: task.done } })
        setCheck(check + (task.done ? -1 : 0))
    }
    return (
        <div className="taskitem">
            <button className={task.done ? "tasknamebtn greenbg" : "tasknamebtn"} onClick={(e) => handleCheck(task)}>
                {task.name}
            </button>
            {task.done ? console.log("done") : console.log("not done")}
            <button className="btn" onClick={(e) => handleUp(task)}>Up</button>
            <button className="btn" onClick={(e) => handleDown(task)}>Down</button>
            <button className="btn btnX" onClick={(e) => handleX(task)}>X</button>
        </div>
    )
}
export default TaskMake