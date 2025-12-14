import React from 'react';

import type { TaskDeleteProps } from '../types'
import { FaRegTrashCan } from "react-icons/fa6";
const TaskDelete = ({task , onDelete}:TaskDeleteProps) => {

  
    return (
        <div>
            <FaRegTrashCan className="delete-btn" onClick={() => onDelete(task.id)}  />   
        </div>
    );
}

export default TaskDelete;
