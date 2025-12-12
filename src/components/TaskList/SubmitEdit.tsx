
import type { SubmitEditProps } from '../../types'

const SubmitEdit = ({onIsEdit}:SubmitEditProps) => {
        

    const handleEditForm = () =>{
        onIsEdit(false)
    }


    return (
        <div>
             <button className="edit-btn" onClick={handleEditForm}>Submit Edit</button> 
        
        </div>
    );
}

export default SubmitEdit;
