import { useEffect, useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import { tasks } from './utils/task';
import type { TaskStatus , Task } from './types';
import AddSearchBar from './components/AddSearchBar/AddSearchBar';
import FilterBar from './components/FilterBar/FilterBar';

const App = () => {
  const [taskList , setTaskList] = useState(tasks)
  const [originalTasks, setOriginalTasks] = useState<Task[]>(tasks);
  const [tasksnum, setTasksnum] = useState(21);
  

  const filterTasks = (filtered: Task[]) => {
        console.log('filtered' , filtered)
        setTaskList(filtered);
  }
  const updateTaskStatus = (id: string, newStatus: TaskStatus) => {

    const updated = originalTasks.map(t =>
      t.id === id ? { ...t, status: newStatus } : t
    );

    setOriginalTasks(updated);
    
    setTaskList(prev =>
      prev.map(t =>
        t.id === id ? { ...t, status: newStatus } : t
        
      )
    )
    console.log('tasklist' , taskList)
  }

  const deleteTask = (id: string) => {
    setOriginalTasks(prev => prev.filter(t => t.id !== id))
    setTaskList(prev => prev.filter(t => t.id !== id))
  }

  const addTask = (newTask: Task) => {
    setOriginalTasks(prev => [...prev, newTask]);
    setTaskList(prev => [...prev, newTask]);
    setTasksnum(prev => prev + 1)


  };

  const searchTask = (searchParams: string[]) => {
      const matches = taskList.filter(task => {
        return searchParams.some(param =>
          task.title.toLowerCase().includes(param.toLowerCase()) ||
          task.description.toLowerCase().includes(param.toLowerCase())
        )
      })
      setTaskList(matches);
  

  };
  

  const editTask = (updatedtask: Task) => {
    setOriginalTasks(prev => prev.map(t => t.id == updatedtask.id ? updatedtask : t));
    setTaskList(prev => prev.map(t => t.id == updatedtask.id ? updatedtask : t));
  }
  
  useEffect(()=>{
    
  },[tasksnum , taskList ,originalTasks ])
  return (
    <div className='container'>
      <div className="row">
        <div className="title__container"><h1>SBA - Task by Rice</h1></div>
        <AddSearchBar taskId={tasksnum} addTask={addTask}  searchTask={searchTask}/>
        <FilterBar tasks={originalTasks} onChange={filterTasks}/>
        <TaskList 
          tasks = {taskList} 
          onStatusChange={updateTaskStatus} 
          onDelete={deleteTask} 
          onEdit={editTask} 
          />
        
      </div>
    </div>
  );
}

export default App;
