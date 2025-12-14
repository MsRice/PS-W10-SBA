
import type { TaskEditProps } from '../../types'
import { FaPencil } from "react-icons/fa6";

const TaskEdit = ({onIsEdit}:TaskEditProps) => {
        

    const handleEditForm = () =>{
       
        onIsEdit(true)
    }


    return (
        <div>
             <FaPencil className="edit-btn" onClick={handleEditForm} /> 
        
        </div>
    );
}

export default TaskEdit;
