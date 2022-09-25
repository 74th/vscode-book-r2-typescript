import { Task } from "../entity/task";
import * as api from "../api/task";

interface Props {
    taskList: Task[];
    reloadTasks: () => Promise<void>;
}

export const ListTaskView = (props: Props) => {
    const cards = props.taskList.map((task) => (
        <TaskCard
            task={task}
            reloadTasks={props.reloadTasks}
            key={task.id}
        ></TaskCard>
    ));
    return (
        <p>
            <ul>{cards}</ul>
        </p>
    );
    // private tasks: ITask[] = [];
};

interface TaskCardProps {
    task: Task;
    reloadTasks: () => Promise<void>;
}

const TaskCard = (props: TaskCardProps) => {
    async function clickDone(): Promise<void> {
        await api.postTaskDone(props.task);
        props.reloadTasks();
    }

    return (
        <li>
            [{props.task.id}] {props.task.text}{" "}
            <button onClick={clickDone}>done</button>
        </li>
    );
};
