import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from '@testing-library/react';
import Act from '../Act';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('can render and update a Act', () => {
    // Test first render and componentDidMount
    act(() => {
        ReactDOM.createRoot(container).render(<Act />);
    });
    const button = container.querySelector('button');
    const label = container.querySelector('p');
    expect(label.textContent).toBe('You clicked 0 times');

    // Test second render and componentDidUpdate
    act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));});
        expect(label.textContent).toBe('You clicked 1 times');
    }
);