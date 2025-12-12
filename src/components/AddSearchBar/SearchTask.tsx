import React, { useState } from 'react';
import type { SearchTaskProps } from '../../types';

const SearchTask = ({searchTask}:SearchTaskProps) => {

    const [searchParams , setSearchParams] =useState<string[]>([])

    const handleSearch = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(searchParams)
        searchTask(searchParams)
    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder='Search Task' value={searchParams.join(' ')} onChange={e =>{setSearchParams(e.target.value.split(' '))}}  />
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchTask;
