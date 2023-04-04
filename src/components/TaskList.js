import TaskMake from "./TaskMake"
export default function TaskList({ tasks, dispatch, setCheck, check }) {
    return (
        <div>
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