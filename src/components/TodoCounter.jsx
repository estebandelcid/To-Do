import React from "react"
import { TodoContext } from "./TodoContext"

const TodoCounter = () => {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return (
      <div className="flex flex-col items-center ">
        <h1
          className=" text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#feb5fb] to-[#5f1d90] animate-bmove "
          style={{
            backgroundSize: "200%",
          }}
        >
          Your tasks
        </h1>
        {totalTodos === completedTodos && totalTodos >= 1 ? (
          <h2 className="text-xl font-semibold text-green-500 text-center">
            {" "}
            Finished all you´re tasks. <br />
            
          </h2>
        ) : (
          <h2 className="text-xl font-semibold text-neutral-100">
            Complete {completedTodos} of {totalTodos} Tasks
          </h2>
        )}
      </div>
    );
}

export {TodoCounter}

