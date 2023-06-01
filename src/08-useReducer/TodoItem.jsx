export const TodoItem = ({ todo, onDeleteTodo, onTooggleTodo}) => {
  return (
    <li 
      className="list-group-item d-flex justify-content-between">
      <span 
          className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through': ''}`}
          onDoubleClick={() => onTooggleTodo(todo.id)}
      >{ todo.desc }</span>
      <button
          className="btn btn-danger"
          onClick={() => onDeleteTodo(todo.id)}
      >Borrar</button>
    </li>
  )
}
