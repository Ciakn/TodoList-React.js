import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
const TodoForm = ({ AddTodoHandler, edit }) => {
  const [todos, setTodos] = useState(edit ? edit.text : "");
  const inputRef = useRef();
  const ChangeHandler = (e) => {
    setTodos(e.target.value);
    console.log(e.target.value);
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    AddTodoHandler(todos);

    setTodos("");
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form onSubmit={SubmitHandler}>
      <input
        type="text"
        value={todos}
        onChange={ChangeHandler}
        placeholder={edit ? "Update..." : "Add todos"}
        ref={inputRef}
      />
      <button className={`btn ${edit ? "update" : "Add"}`} type="submit">
        {edit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
