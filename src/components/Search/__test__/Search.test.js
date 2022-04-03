// https://www.robinwieruch.de/react-testing-library/

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';
import Search from "../Search";

describe("test Search", () => {
    test("calls onChange callback handler using fireEvent", () => {
        const onChange = jest.fn();

        render(
            <Search value="" onChange={onChange} />
        );

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'JavaScript' },
        });
      
        expect(onChange).toHaveBeenCalledTimes(1);
    });


    test("calls onChange callback handler using userEvent", async () => {
        const onChange = jest.fn();

        render(
            <Search value="" onChange={onChange} />
        );

        await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
      
        expect(onChange).toHaveBeenCalledTimes(10);
    });

    test("test value", async () => {
        const value = "JavaScript";

        render(
            <Search value={value} onChange={() => {}} />
        );

        const message = await screen.findByText(/Searches for JavaScript/);

        expect(message).toBeInTheDocument();
    });
});