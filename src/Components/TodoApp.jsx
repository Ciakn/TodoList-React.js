import { useEffect } from "react";
import { useState } from "react";
import NavBar from "./NavBar";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
  useEffect(() => {
    filterTodos(selectedOption);
  }, [selectedOption, todos]);

  const AddTodoHandler = (Todo) => {
    if (Todo === "") {
      alert("Enter a todo");
    } else {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        inputText: Todo,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      console.log(todos);
    }
  };
  const CompeletedHandler = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    const selectedItem = { ...todos[index] };
    selectedItem.isCompleted = !selectedItem.isCompleted;
    const updatedItem = [...todos];
    updatedItem[index] = selectedItem;

    setTodos(updatedItem);
    console.log(todos);
  };
  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((items) => items.id !== id);
    setTodos(filteredTodos);
  };
  const onUpdatetodo = (id, newValue) => {
    const index = todos.findIndex((item) => item.id === id);
    const selectedItem = { ...todos[index] };
    selectedItem.inputText = newValue;
    const updatedItem = [...todos];
    updatedItem[index] = selectedItem;

    setTodos(updatedItem);
  };
  const filterTodos = (status) => {
    switch (status) {
      case "All":
        setFilteredTodos(todos);

        break;
      case "Completed":
        console.log(`comp;`);
        setFilteredTodos(todos.filter((t) => t.isCompleted));

        break;

      case "unCompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;

      default:
        setFilteredTodos();
    }
  };
  const SelectHandler = (e) => {
    setSelectedOption(e.target.value);
    filterTodos(e.target.value);
  };
  return (
    <div className="Container">
      <NavBar
        selectedOption={selectedOption}
        onSelect={SelectHandler}
        unCompletedTodos={todos.filter((item) => !item.isCompleted).length}
      />
      <TodoForm AddTodoHandler={AddTodoHandler} />
      <TodoList
        todos={filteredTodos}
        onComplete={CompeletedHandler}
        onDelete={deleteHandler}
        onEdit={onUpdatetodo}
      />
    </div>
  );
};

export default TodoApp;
