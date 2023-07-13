import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('HomePage Test', () => {

    const user = {
        id: 123, 
        name: 'Juan Santana',
        email: 'juan@ejemplo.com'
    }

    test('show without user test', () => {
        
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        
        expect(preTag.innerHTML).toBe('null');
    });

    test('show user test', () => {

        render(
            <UserContext.Provider value={{ user: user}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.email);
    });
});