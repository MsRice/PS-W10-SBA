import TaskItem from './TaskItem';
import type { TaskListProps } from '../../types';

const TaskList = ({tasks , onStatusChange , onDelete , onEdit ,onDragStart , onDragOver ,onDrop}:TaskListProps) => {


    return (
        <ul className="task__list--wrapper">
            {tasks.map((el , index) => 
                <TaskItem 
                    key={el.id}
                    index ={index}
                    task={el}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete}
                    onEdit={onEdit} 
                    onDragStart = {onDragStart}
                    onDragOver = {onDragOver}
                    onDrop = {onDrop}/>
                    )}
        </ul>
    );
}

export default TaskList;
