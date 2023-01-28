import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <>
      <div className="relative mt-2">
        <form
          className="relative w-[300px] mx-auto"
          onSubmit={(e) => handleAdd(e)}
        >
          <input
            className="inp-get-task"
            type="text"
            placeholder="Enter a task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn-go" type="submit">
            GO
          </button>
        </form>
      </div>
    </>
  );
};

export default InputField;
