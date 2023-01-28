import React, { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <>
      <div className="container text-center">
        <h1>TASKIFY</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

        {/* Show Todo List */}
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;
