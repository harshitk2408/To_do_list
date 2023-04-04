function TaskMake({ task, setCheck, check, dispatch }) {
    console.log("TaskMake working")
    const handleCheck = () => {
        setCheck(check + (task.done ? -1 : 1))
        task.done = !task.done
    }
    const handleDown = () => { }
    const handleUp = (task) => {
        dispatch({ type: "UP", payload: { name: task.name, id: task.id } })
    }
    const handleX = (task) => {
        dispatch({ type: "DELETE", payload: { name: task.name, id: task.id } })
    }
    return (
        <div>
            <button className="taskname" onClick={handleCheck}>
                {task.name}
            </button>
            <button onClick={handleUp}>Up</button>
            <button onClick={(e) => handleDown(task)}>Down</button>
            <button onClick={(e) => handleX(task)}>X</button>
        </div>
    )
}
export default TaskMake