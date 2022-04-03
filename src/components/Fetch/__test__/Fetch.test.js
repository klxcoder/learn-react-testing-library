import React from 'react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Fetch from '../Fetch';

jest.mock('axios');

describe('test Fetch', () => {
    test('fetches users from an API and displays them', async () => {
        const users = [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
            }
        ]

        axios.get.mockImplementationOnce(() => Promise.resolve({ data: users }));

        render(<Fetch />);

        await userEvent.click(screen.getByRole('button'));

        const items = await screen.findAllByRole('listitem');

        expect(items).toHaveLength(2);
    });

    test('fetches users from an API and fails', async () => {
        axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

        render(<Fetch />);

        await userEvent.click(screen.getByRole('button'));

        const message = await screen.findByText(/Something went wrong/);

        expect(message).toBeInTheDocument();
    });

    test('fetches users from an API and displays them', async () => {
        const users = [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
            }
        ]

        const promise = Promise.resolve({ data: users });

        axios.get.mockImplementationOnce(() => promise);

        render(<Fetch />);

        await userEvent.click(screen.getByRole('button'));

        await act(() => promise);

        expect(await screen.findAllByRole('listitem')).toHaveLength(2);
    });
});