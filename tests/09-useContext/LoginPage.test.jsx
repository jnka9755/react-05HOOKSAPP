import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('LoginPage Test', () => {

    test('show without user test', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        const button = screen.getByRole('button');

        expect(preTag.innerHTML).toBe('null');
        expect(button).toBeTruthy();
    });

    test('setUser test', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        
        expect(setUserMock).toHaveBeenCalledWith({id: 123, name: 'Juan Santana', email: 'juan@ejemplo.com'});
    });
});