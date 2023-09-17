import { AiFillEdit } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

const Todo = ({ Todos, onComplete, onDelete, onEdit }) => {
  return (
    <div className="todoContainer">
      <div className="todo">
        <h4
          onClick={onComplete}
          className={`todoText ${
            Todos.isCompleted === true ? "completed" : ""
          }`}
        >
          {Todos.inputText}
        </h4>
        <div>
          <button
            className="btn"
            onClick={onComplete}
          >
            {<AiOutlineCheck className="icon" />}
          </button>
          <button className="btn" onClick={onEdit}>
            {<AiFillEdit className="icon" />}
          </button>
          <button className="btn remove" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
