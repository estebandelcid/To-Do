import React from "react";
import AppUI from "../App/AppUI.jsx";
import { TodoProvider } from "../context/TodoContext.js";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
