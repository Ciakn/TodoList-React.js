import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
const TodoList = ({ todos, onComplete, onDelete, onEdit }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  const sumbitTodoHandler = (newValue) => {
    console.log(newValue);
    onEdit(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };
  const renderTodos = () => {
    if (todos.length === 0) return <p>Enter your Todos</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          Todos={todo}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };
  return (
    <div className="TodoListStyle">
      {edit.id ? (
        <TodoForm edit={edit} AddTodoHandler={sumbitTodoHandler} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
