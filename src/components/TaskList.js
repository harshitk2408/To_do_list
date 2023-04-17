import TaskMake from "./TaskMake"
import './../App.css'
export default function TaskList({ tasks, dispatch, setCheck, check }) {
    return (
        <div className="tasklist">
            {tasks.map((task) => (
                <div key={task.id}>
                    <TaskMake
                        task={task}
                        setCheck={setCheck}
                        check={check}
                        dispatch={dispatch}
                    /></div>
            ))}
        </div>
    )
}