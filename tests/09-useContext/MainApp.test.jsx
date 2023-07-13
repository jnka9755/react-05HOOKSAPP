import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('MainApp Test', () => {

    test('show HomePage test', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getAllByText('Home Page')).toBeTruthy();
    });

    test('show LoginPage test', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getAllByText('Login Page')).toBeTruthy();
    });

    test('show AboutPage test', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getAllByText('About Page')).toBeTruthy();
    });
});