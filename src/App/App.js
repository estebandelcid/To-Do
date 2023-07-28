import React from "react";
import AppUI from "../App/AppUI.jsx";
import { TodoProvider } from "../components/TodoContext.jsx";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
