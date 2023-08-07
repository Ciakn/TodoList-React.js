const Todo = ({ Todos, onComplete , onDelete , onEdit}) => {
  return (
    <div>
      <div className="todo">
        <div  onClick={onComplete} className={Todos.isCompleted === true ? "completed" : ""}>
          {Todos.inputText}
        </div>
        <div>
          <button className="btn" onClick={onEdit}>Edit</button>
          <button  className="btn remove" onClick={onDelete} >Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
