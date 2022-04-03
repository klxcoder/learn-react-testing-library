import { render, act } from '@testing-library/react';
import App from './App';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

test('renders App component', async () => {
    await act(async () => {
        render(<App />);
    });
    expect(true);
});