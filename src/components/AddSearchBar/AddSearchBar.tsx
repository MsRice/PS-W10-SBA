import React from 'react';
import AddTask from './AddTask';
import SearchTask from './SearchTask';
import type { AddSearchProps } from '../../types';

const AddSearchBar = ({taskId , addTask , searchTask}: AddSearchProps) => {
    return (
        <div>
            <h1>AddSearchBar</h1>
            <AddTask taskId={taskId} addTask={addTask}/>
            <SearchTask searchTask={searchTask}/>
        </div>
    );
}

export default AddSearchBar;
