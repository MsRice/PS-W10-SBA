import React , {useState} from 'react';
import type { AddTaskProps, TaskStatus } from '../../types';

const AddTask = ({taskId , addTask}: AddTaskProps) => {


const [title, setTitle] = useState<string>('');
const [description, setDescription] = useState<string>('');
const [status, setStatus] = useState<TaskStatus>('pending');
const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('high');
const [dueDate, setDueDate] = useState<string>('');

const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();

const newTask = {
    id : `task-${taskId}`, title ,description ,status ,priority, dueDate
}


addTask(newTask)





}
    return (
        <div className='add__task--wrapper'>
            <div className='add__task'> + Task </div>
            <div className='add__task--container'>

                <form className='add__task--form' onSubmit={handleForm}>
                

                    <label htmlFor="task-title">Task Title:</label>
                    <input type="text" id='task-title' value={title}  onChange={e =>setTitle(e.target.value)}/>

                    <label htmlFor="task-description">Description:</label>
                    <textarea id='task-description' value={description}  onChange={e =>setDescription(e.target.value)}/>

                    <label htmlFor="task-status">Status:</label>
                    <select  id='task-status' value={status} onChange={e =>setStatus(e.target.value as TaskStatus)}>
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>

                    <label htmlFor="task-priority">Priority:</label>
                    <select id="task-priority" value={priority} onChange={e =>setPriority(e.target.value as 'low' | 'medium' | 'high')}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>

                    <label htmlFor="task-dueDate">Due Date:</label>
                    <input type="date" id='task-dueDate' value={dueDate} onChange={e =>setDueDate(e.target.value)} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddTask;
