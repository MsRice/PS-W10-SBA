import { useEffect, useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import { tasks } from './utils/task';
import type { TaskStatus , Task } from './types';
import AddSearchBar from './components/AddSearchBar/AddSearchBar';
import FilterBar from './components/FilterBar/FilterBar';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleHalfStroke } from "react-icons/fa6";
import PMaxwell_Resume from './assets/Patrice Maxwell.pdf'
import { RxCross2 } from "react-icons/rx";

import taskbyRice from './assets/Task by Rice.png'

const App = () => {
  const [taskList , setTaskList] = useState(tasks)
  const [originalTasks, setOriginalTasks] = useState<Task[]>(tasks);
  const [tasksnum, setTasksnum] = useState(21);
  const [dragIndex ,setDragIndex] = useState<number | null>(0)
  const [theme, setTheme] = useState('light'); 
  const [modal, setModal] = useState('closed'); 


   const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

   const toggleModal = () => {
    setModal((currModal) => (currModal === 'closed' ? 'open' : 'closed'));
  };

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
  
     const handleDragStart = (index:number) =>{
        setDragIndex(index)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
    }

    const handleDrop = (index:number) => {
       if (dragIndex === null || dragIndex === index) return;
        const newTasks = [...tasks]
        const draggedTask = newTasks[dragIndex]
        newTasks.splice(dragIndex , 1)
        newTasks.splice(index , 0, draggedTask)
        setTaskList(newTasks)
        setDragIndex(null)
    }

  useEffect(()=>{
    
  },[tasksnum , taskList ,originalTasks ])
  return (
    <>
    <div className={`wrapper wrapper-${theme} `}>
        <div className={`container container-${modal}`}>
          <div className="nav">

            <div className="nav__image--wrapper"><img className="nav__image--img" src={taskbyRice} alt="" /></div>
            <div className="nav__title--container"><h1>SBA - Task by Rice</h1></div>
            <div className='nav__buttons-container'>
              <div className="nav__dark-mode--container">
                <FaCircleHalfStroke onClick={toggleTheme}/>
              </div>
              <div className='nav__about-me--container'>
                <RxHamburgerMenu onClick={toggleModal}/>
              </div>
            </div>
          </div>
            <AddSearchBar taskId={tasksnum} addTask={addTask}  searchTask={searchTask}/>
            <FilterBar tasks={originalTasks} onChange={filterTasks}/>
            <TaskList 
              tasks = {taskList} 
              onStatusChange={updateTaskStatus} 
              onDelete={deleteTask} 
              onEdit={editTask} 
              onDragStart = {handleDragStart}
              onDragOver = {handleDragOver}
              onDrop = {handleDrop}
              />
            
        </div>
        <div className={`about-me about-${modal}`}>
          <div className='nav__about--container'>
            <RxCross2 onClick={toggleModal}/>
          </div>
            <ul className="social__links">
                <li className="footer__link"><a href="https://app.joinhandshake.com/profiles/gqqjmh" target="_blank">HandShake</a></li>
                <li className="footer__link"><a href="https://https://github.com/MsRice" target="_blank">Github</a></li>
                <li className="footer__link"><a href="https://www.linkedin.com/in/patrice-maxwell" target="_blank">LinkedIn</a></li>
                <li className="footer__link"><a href="https://www.thegrainofrice.com/patricemaxwell" target="_blank">GrainofRice.com</a></li>
                <li className="footer__link"><a href={PMaxwell_Resume} target="_blank">Download CV</a></li>
            </ul>
            <div className="about__image--wrapper">
              <img className="about__image--img"src={taskbyRice} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
