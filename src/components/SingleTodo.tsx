import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  // Use States for Edit Proccess
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  // Done Function
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // Delete Function
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <form  onSubmit={(e) => handleEdit(e, todo.id)} className="mx-auto mt-4 bg-green-600 rounded w-60">
      <div className="flex py-1 text-lg place-content-between">
      {edit ? (
      
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="rounded px-2 w-36 ml-1 text-gray-800"
             
            />
          ) : todo.isDone ? (
            <s className="ml-2 text-gray-900">{todo.todo}</s>
          ) : (
            <span className="ml-2">{todo.todo}</span>
          )}
       


        
         

          <div>
            <AiFillEdit
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
              className="inline mr-2 cursor-pointer"
            />

            <BsFillTrashFill
              onClick={() => handleDelete(todo.id)}
              className="inline mr-2 cursor-pointer"
            />
            <MdDone
              onClick={() => handleDone(todo.id)}
              className="inline mr-2 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SingleTodo;
