import React from "react";

const CreateBar = () => {

    return (
      <div>
        <p className=" text-md left-0 text-[#72367c]">Task Name</p>
  
          <input
            type="text"
            placeholder="Hacer el examen de Asincronismo"
            className="w-[20rem] bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg p-2 mb-4"
            
          />
      </div>
    );
  };
  
  export { CreateBar };
  