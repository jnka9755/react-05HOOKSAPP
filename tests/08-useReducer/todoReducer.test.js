import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('todoReducer Test', () => {

    const initialState = [{
        id: 1,
        desc: 'test',
        done: false
    }]

    test('return initial state', () => {

        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
    });

    test('Add todo test', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                desc: 'test 2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('Remove todo test', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
    });

    test('Toggle todo test', () => {

        const action = {
            type: '[TODO Toggle Todo]',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBeTruthy();
    });
});