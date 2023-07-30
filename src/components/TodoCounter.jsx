import React from "react"
import { TodoContext } from "./TodoContext"

const TodoCounter = () => {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return (
      <div className="flex flex-col items-center ">
        <h1
          className=" text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9e57f4] to-[#2101a3] animate-bmove "
          style={{
            backgroundSize: "200%",
          }}
        >
          Your tasks
        </h1>
        {totalTodos === completedTodos && totalTodos >= 1 ? (
          <h2 className="text-xl font-semibold text-green-500 text-center">
            {" "}
            Congratulations, <br />
            You're complete all your tasks! 🥳
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
