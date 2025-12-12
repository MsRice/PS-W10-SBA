import React from 'react';

import type { TaskDeleteProps } from '../types'

const TaskDelete = ({task , onDelete}:TaskDeleteProps) => {

  
    return (
        <div>
            <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>   
        </div>
    );
}

export default TaskDelete;
