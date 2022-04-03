// https://www.robinwieruch.de/react-testing-library/

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Signin from "../Signin";

describe("test Signin", () => {
    test("Signin should have text:Signed in as", async () => {
        render(<Signin />);
        expect(screen.queryByText(/Signed in as/)).toBeNull();
        // screen.debug();
        expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
        // screen.debug();
    });
});