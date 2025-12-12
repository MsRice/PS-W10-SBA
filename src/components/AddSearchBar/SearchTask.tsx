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
        <div className='search__task--container'>
            <form className='search__task--form' onSubmit={handleSearch}>
                <input type="text"  className='search__task--input' placeholder='Search Task' value={searchParams.join(' ')} onChange={e =>{setSearchParams(e.target.value.split(' '))}}  />
                <button className='search__task'>Search</button>
            </form>
        </div>
    );
}

export default SearchTask;
