import TaskItem from './TaskItem';
import type { TaskListProps } from '../../types';

const TaskList = ({tasks , onStatusChange , onDelete , onEdit }:TaskListProps) => {
    return (
        <ul className="task__list--wrapper">
            {tasks.map((el) => 
                <TaskItem 
                    key={el.id}
                    task={el}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete}
                    onEdit={onEdit} />
                    )}
        </ul>
    );
}

export default TaskList;
