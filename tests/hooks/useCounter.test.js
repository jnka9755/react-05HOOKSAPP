import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Test useCounter', () => { 

    test('Return default values', () => { 

        const { result } = renderHook( () => useCounter() ); 
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(0);
        expect(decrement).toEqual( expect.any(Function));
        expect(increment).toEqual( expect.any(Function));
        expect(reset).toEqual( expect.any(Function));
    });

    test('Counter with value 100', () => { 

        const { result } = renderHook( () => useCounter(100) ); 
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('Increment test', () => {

        const { result } = renderHook( () => useCounter() ); 
        const { increment } = result.current;

        act( () => {
            increment();
            increment(4);
        });

        expect( result.current.counter ).toBe(5);
    });

    test('Decrement test', () => {

        const { result } = renderHook( () => useCounter(10) ); 
        const { decrement } = result.current;

        act( () => {
            decrement();
            decrement(3);
        });

        expect( result.current.counter ).toBe(6);
    });

    test('Reset test', () => {

        const { result } = renderHook( () => useCounter(55) ); 
        const { increment, decrement, reset } = result.current;

        act( () => {
            increment(22);
            decrement(15);

            reset();
        });

        expect( result.current.counter ).toBe(55);
    });
});