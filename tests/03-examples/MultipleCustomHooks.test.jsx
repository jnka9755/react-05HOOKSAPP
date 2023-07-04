const { render, screen, fireEvent } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../src/03-examples/MultipleCustomHooks");
const { useFetch } = require("../../src/hooks/useFetch");
const { useCounter } = require("../../src/hooks/useCounter");

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter')

describe('Test MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(< MultipleCustomHooks/>);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('MultipleCustomHooks'));

        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        expect(nextButton.disabled).toBeTruthy();
    });

    test('Show Quote test', () => {

        useFetch.mockReturnValue({
            data: [{author:'Test', quote:'test' }],
            isLoading: false,
            hasError: null
        });

        render(< MultipleCustomHooks/>);

        expect(screen.getByText('Test')).toBeTruthy();
        expect(screen.getByText('test')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        expect(nextButton.disabled).toBeFalsy();
    });

    test('Increment function test', () => {

        useFetch.mockReturnValue({
            data: [{author:'Test', quote:'test' }],
            isLoading: false,
            hasError: null
        });
        
        render(< MultipleCustomHooks/>);

        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        fireEvent.click(nextButton);

        expect(mockIncrement).toBeCalled();
    });
});