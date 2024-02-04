import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NumberDisplay from "./NumberDisplay";
// import * as jestDom from '@testing-library/jest-dom'

test("Render the counter component with toBeVisible", () => {
    render(<NumberDisplay />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    const numberElement = screen.getByText("Number: 1");
    expect(numberElement).toBeVisible;
});

test("Render the counter component with toEqual", () => {
    render(<NumberDisplay />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    const numberElement = screen.getByText("Number: -1");
    const numberElementTwo = screen.getByText("Number: -1");
    expect(numberElement).toEqual(numberElementTwo);
});

test("Render the counter component with toBeTruthy", () => {
    render(<NumberDisplay />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    const numberElement = screen.getByText("Number: 1");
    expect(numberElement).toBeTruthy;
});

test("Render the counter component with toContain", () => {
    render(<NumberDisplay />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    const possibleNumbers = [-1, 0, 1];
    expect(possibleNumbers).toContain(-1);
});

    test("Render the counter component with toHaveBeenCalled with increment", () => {
        const mockIncrement = jest.fn();
        jest.mock("./NumberDisplay", () => ({ increment: mockIncrement }));
        render(<NumberDisplay />);
        const incrementButton = screen.getByText("Increment");
        fireEvent.click(incrementButton);
        expect(mockIncrement).toHaveBeenCalled;
    });

test("Render the counter component with toHaveBeenCalled with decrement", () => {
    const mockIncrement = jest.fn();
    jest.mock("./NumberDisplay", () => ({ increment: mockIncrement }));
    render(<NumberDisplay />);
    const incrementButton = screen.getByText("Decrement");
    fireEvent.click(incrementButton);
    expect(mockIncrement).toHaveBeenCalled;
});

test("Render the counter component with toTrow", () => {
    render(<NumberDisplay />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    const throwError = () => {
        throw new Error("An error occurred");
    };
    expect(throwError).toThrow;
});

// test("Number is greater than 0 after clicking Increment button with toBeGreaterThan", () => {
//     render(<NumberDisplay />);
//     const incrementButton = screen.getByText("Increment");
//     fireEvent.click(incrementButton);
//     const numberElement = screen.getByText(/Number: (\d+)/);
//     const numberValue = Number(numberElement.textContent.match(/\d+/)[0]);
//     expect(numberValue).toBeGreaterThan(0);
// });

// test('Number matches "1" after clicking Increment button with toMatch', () => {
//     render(<NumberDisplay />);
//     const incrementButton = screen.getByText("Increment");
//     fireEvent.click(incrementButton);
//     const numberElement = screen.getByText(/Number: (\d+)/);
//     expect(numberElement.textContent).toMatch(/1/);
// });

// test("Number is defined after rendering with toBeDefined", () => {
//     render(<NumberDisplay />);
//     const numberElement = screen.getByText("Number: 0");
//     expect(numberElement).toBeDefined();
// });

// test("Number is not null after rendering with not.toBeNull", () => {
//     render(<NumberDisplay />);
//     const numberElement = screen.getByText("Number: 0");
//     expect(numberElement).not.toBeNull();
// });

// test("Number is 0 after rendering with toBe", () => {
//     render(<NumberDisplay />);
//     const numberElement = screen.getByText("Number: 0");
//     expect(numberElement.textContent).toBe("Number: 0");
// });
