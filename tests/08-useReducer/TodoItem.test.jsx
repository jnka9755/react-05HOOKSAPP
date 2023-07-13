import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('TodoItem Test', () => {

    const todo = {
        id: 1,
        desc: 'test',
        done: false
    };

    const onDeleteTodoMock  = jest.fn();
    const onTooggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('show todo pending test', () => {

        render(
            <TodoItem 
                todo={ todo } 
                onTooggleTodo={ onTooggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock } 
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('show todo complete test', () => {

        todo.done = true;

        render(
            <TodoItem 
                todo={ todo } 
                onTooggleTodo={ onTooggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock } 
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('onToggleTodo click span test', () => {

        render(
            <TodoItem 
                todo={ todo } 
                onTooggleTodo={ onTooggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock } 
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.doubleClick( spanElement );

        expect(onTooggleTodoMock).toHaveBeenCalledWith( todo.id );
    });

    test('onDeleteTodo click button test', () => {

        render(
            <TodoItem 
                todo={ todo } 
                onTooggleTodo={ onTooggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock } 
            />
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );

        expect(onDeleteTodoMock).toHaveBeenCalledWith( todo.id );
    });
});