import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {

    const { todos, totalTodos, pendingTodos, handleNewTodo, handleDeleteTodo, handleTooggleTodo } = useTodo();

    return (
        <>
            <h1>TodoApp {totalTodos}, <small>Pendientes: {pendingTodos}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onTooggleTodo={handleTooggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agredar TODO</h4>
                    <hr />

                    <TodoAdd 
                        onNewTodo={ handleNewTodo }
                    />
                </div>

            </div>
        </>
    )
}
