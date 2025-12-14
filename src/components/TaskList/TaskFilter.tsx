import React from 'react';
import type { TaskStatus } from '../../types';
import type { TaskItemProps } from '../../types';



const TaskFilter = ({task , onStatusChange}:TaskItemProps) => {

        function handleStatusChange(event:React.ChangeEvent<HTMLSelectElement>){
            const newStatus = event.target.value as TaskStatus
            onStatusChange(newStatus)
        }

    return (
        <>
        <select className="task--dropdown" id={`${task?.id}-status`} defaultValue={task.status} onChange={handleStatusChange} >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
        </select>
        
        </>
    );
}

export default TaskFilter;
