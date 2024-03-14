import { VscSearch } from "react-icons/vsc";
import React from "react";

export const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  return (
    <div className="w-full flex justify-center items-center text-white/60 focus-within:text-white/30 ">
      <div className="relative w-8/12 flex items-center">
        <VscSearch className={`${loading && 'opacity-25 transition duration-100'} absolute w-6 h-6 ml-3 pointer-events-none z-10 `}/>
        <input
          type="text"
          value={searchValue}
          disabled={loading}
          placeholder="Search Task"
          className="w-full bg-white/5 bg-texture backdrop-blur-3xl outline-none border-2 border-white border-opacity-[0.03] rounded-lg text-white pr-3 pl-12 py-2 focus:placeholder:text-neutral-100/20 disabled:opacity-25 transition duration-100"
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
    </div>
  );
};
