import React from 'react';
import AddTask from './AddTask';
import SearchTask from './SearchTask';
import type { AddSearchProps } from '../../types';

const AddSearchBar = ({taskId , addTask , searchTask}: AddSearchProps) => {
    return (
        <div className='add-search__bar--wrapper'>
            <AddTask taskId={taskId} addTask={addTask}/>
            <SearchTask searchTask={searchTask}/>
        </div>
    );
}

export default AddSearchBar;
