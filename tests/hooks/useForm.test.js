import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Test useForm', () => {


    const initialForm = {
        name: 'Juan',
        email: 'juan@ejemplo.com'
    }
    
    test('Return default values', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });
    
    test('onInputChange test', () => {

        const newValue = 'David';
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;


        act( () => {
            onInputChange({target: { name: 'name', value: newValue } })
        });


        expect(result.current.name).toEqual(newValue);
        expect(result.current.formState.name).toEqual(newValue);
    });

    test('onReset test', () => {

        const newValue = 'David';
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;


        act( () => {
            onInputChange({target: { name: 'name', value: newValue } });
            onResetForm();
        })

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });
});