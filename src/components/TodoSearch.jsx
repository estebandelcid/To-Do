import {FiSearch} from 'react-icons/fi'
import React from 'react';
import { TodoContext } from './TodoContext';


const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  return (
    <div>
        <input
          type="text"
          placeholder="Search Todo"
          className="w-[20rem] bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg p-2 mb-4"
          onChange={(event) => (setSearchValue(event.target.value))}
        />
        <span className=" relative inline-block right-[30px] top-[5px]">
          <FiSearch size='20px'/>
        </span>
    </div>
  );
};

export { TodoSearch };
