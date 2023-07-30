import {FiSearch} from 'react-icons/fi'
import React from 'react';
import { TodoContext } from './TodoContext';


const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  return (
    <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 ">
      <FiSearch className="absolute w-5 h-5 ml-3 stroke-[3px] pointer-events-none" />
      <input
        type="text"
        placeholder="Search Task"
        className="w-[20rem] bg-neutral-700 outline-none focus:outline-neutral-500 rounded-lg text-neutral-100 pr-3 pl-10 py-2"
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

export { TodoSearch };


