// https://www.youtube.com/watch?v=GLSSRtnNY0g&ab_channel=LaithHarb

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Counter from "../Counter";

let component;

beforeEach(() => {
    component = render(<Counter />);
});

test("header renders with correct text", () => {
    const headerEl = component.getByTestId("header");

    expect(headerEl.textContent).toBe("My Counter");
});

test("counter initally start with text of 0", () => {
    const counterEl = component.getByTestId("counter");

    expect(counterEl.textContent).toBe("0");
});

test("input contains inital value of 1", () => {
    const inputEl = component.getByTestId("input");

    expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
    const addBtn = component.getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
});

test("subtract button renders with -", () => {
    const subtractBtn = component.getByTestId("subtract-btn");

    expect(subtractBtn.textContent).toBe("-");
});

test("change value of input works correctly", () => {
    const inputEl = component.getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5");
});

test("click on plus btn adds 1 to counter", () => {
    const addBtn = component.getByTestId("add-btn");
    const counterEl = component.getByTestId("counter");

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("1");
})

test("click on subtract btn subtracts 1 to counter", () => {
    const subtractBtn = component.getByTestId("subtract-btn");
    const counterEl = component.getByTestId("counter");

    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe("-1");
});

test("changing input value then clicking on add btn works correctly", () => {
    const addBtn = component.getByTestId("add-btn");
    const counterEl = component.getByTestId("counter");
    const inputEl = component.getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("5");
});

test("changing input value then clicking on subtract btn works correctly", () => {
    const subtractBtn = component.getByTestId("subtract-btn");
    const counterEl = component.getByTestId("counter");
    const inputEl = component.getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe("-5");
});

test("adding and then subtracting leads to the correct counter number", () => {
    const addBtn = component.getByTestId("add-btn");
    const subtractBtn = component.getByTestId("subtract-btn");
    const counterEl = component.getByTestId("counter");
    const inputEl = component.getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    });

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);

    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe("30");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    fireEvent.click(addBtn);

    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe("25");
});

test("counter contains correct className", () => {
    const addBtn = component.getByTestId("add-btn");
    const subtractBtn = component.getByTestId("subtract-btn");
    const counterEl = component.getByTestId("counter");
    const inputEl = component.getByTestId("input");

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    });

    fireEvent.click(addBtn);

    expect(counterEl.className).toBe("");

    fireEvent.click(addBtn);

    expect(counterEl.className).toBe("green");

    fireEvent.click(addBtn);

    expect(counterEl.className).toBe("green");

    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);

    expect(counterEl.className).toBe("");

    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);

    expect(counterEl.className).toBe("red");
});