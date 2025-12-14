import type { TaskProps } from '../../types';
import TaskFilter from './TaskFilter';
import TaskDelete from './TaskDelete';
import TaskEdit from './TaskEdit';
import { useState } from 'react';
import SubmitEdit from './SubmitEdit';
import { CgArrowsBreakeV } from "react-icons/cg";


const TaskItem = ({task ,index, onStatusChange , onDelete , onEdit ,onDragStart , onDragOver ,onDrop}:TaskProps) => {

    const [isEdit ,setIsEdit] = useState(false)

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('high');
    const [dueDate, setDueDate] = useState<string>('');

   


    const editTaskOpen = (isEditOpen: boolean) => {
        setIsEdit(isEditOpen)
        
        
        setTitle(task.title)
        setDescription(task.description)
        setPriority(task.priority)
        setDueDate(task.dueDate)
        
       
    }
    
    const handleEditForm = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()

        const updatedTask = {
            ...task, title ,description ,priority, dueDate
        }
        
        
        setIsEdit(false)
        onEdit(updatedTask)
    }

    return (
        
            <div className="task--wrapper" key={task.id}> 
                    {!isEdit ? 
                        <div className="task__info--wrapper"
                            onDragStart={() => onDragStart(index)}
                            onDragOver={onDragOver}
                            onDrop={() => onDrop(index)}
                            draggable>
                            <div className="task--info">
                                <div className="task-title">{task.title} <span className="greyed-sm">#{task.id}</span></div>
                                <div className="task-desc">{task.description}</div>
                                <div className={`task-priority ${task.priority}-priority`}>Priority: {task.priority} <span className="greyed">Due Date: {task.dueDate}</span></div>
                
                            </div>
                            <div className="task--buttons">
                                <TaskFilter task={task} onStatusChange={(newStatus) => onStatusChange(task.id, newStatus)} />
                                <div className='task-btns'>
                                    <TaskDelete task={task} onDelete={onDelete}/>
                                    <TaskEdit onIsEdit={editTaskOpen}/>
                                </div>
                                <CgArrowsBreakeV  
                                    className="drag-handle"
                                    onMouseDown={(e) => e.stopPropagation()}/>
                            </div>    
                        </div>
                        :
                        <form className="task__info--wrapper" onSubmit={handleEditForm}>
                            <div className="task--info-form">
                                <div className="task-title"><input type="text" id='task-title' value={title}  onChange={e =>setTitle(e.target.value)} required/> <span className="greyed sm">#{task.id}</span></div>
                                <div className="task-desc"><textarea id='task-description' value={description} onChange={e =>setDescription(e.target.value)} required/></div>
                                <div className={`task-priority ${task.priority}-priority`}>Priority: {task.priority}
                                    
                                    <select id="task-priority" value={priority} onChange={e =>setPriority(e.target.value as 'low' | 'medium' | 'high')}>
                                       <option value="high">High</option>
                                       <option value="medium">Medium</option>
                                       <option value="low">Low</option>
                                   </select>
                                    
                                     <span className="greyed">Due Date:<input type="date" id='task-dueDate' value={dueDate} onChange={e =>setDueDate(e.target.value)} required/></span></div>
                
                            </div>
                            <div className="task--buttons">
                                <SubmitEdit  onIsEdit={handleEditForm}/>
                            </div>
                        </form>

                }
            </div>

    );
}

export default TaskItem;
   