
import type { TaskEditProps } from '../../types'

const TaskEdit = ({onIsEdit}:TaskEditProps) => {
        

    const handleEditForm = () =>{
       
        onIsEdit(true)
    }


    return (
        <div>
             <button className="edit-btn" onClick={handleEditForm}>Edit</button> 
        
        </div>
    );
}

export default TaskEdit;
