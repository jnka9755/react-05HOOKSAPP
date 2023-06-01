import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onTooggleTodo}) => {
    return (
        
        <ul className="list-group">
            {
                todos.map(todo => (
                    <TodoItem
                        key ={todo.id} 
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onTooggleTodo={onTooggleTodo}
                    />
                ))
            }
        </ul>
    )
}
