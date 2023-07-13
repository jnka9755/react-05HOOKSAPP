import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock('../../src/hooks/useTodo')

describe('TodoApp Test', () => {

    useTodo.mockReturnValue({
        todos: [ 
            { id: 1, desc: 'test #1', done: false}, 
            { id: 2, desc: 'test #2', done: false}
        ],
        totalTodos: 2, 
        pendingTodos: 1, 
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleTooggleTodo: jest.fn()
    });

    test('show component test', () => {

        render(<TodoApp />)
        // screen.debug();

        expect(screen.getByText('test #1')).toBeTruthy();
        expect(screen.getByText('test #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
});