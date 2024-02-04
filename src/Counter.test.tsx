import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter />", () => {
    test("Render the counter component with getByText", () => {
        render(<Counter />);
        
        const countElement = screen.getByText(/Count: /i);
        const buttonElement = screen.getByText(/Increment/i);

        expect(countElement).toBeInTheDocument;
        expect(buttonElement).toBeInTheDocument;
    });

    test("Render the counter component with getByTestId", () => {
        render(<Counter />);
        
        const countElement = screen.getByTestId("count");
        const buttonElement = screen.getByTestId("button");

        expect(countElement).toBeInTheDocument;
        expect(buttonElement).toBeInTheDocument;
    });

    test("Render the counter component with getByRole", () => {
        render(<Counter />);
        
        const h1Element = screen.getByRole("title");

        expect(h1Element).toBeInTheDocument;
    });

    test("Render the counter component with getByPlaceholderText", () => {
        render(<Counter />);
        
        const inputElement = screen.getByPlaceholderText("input");

        expect(inputElement).toBeInTheDocument;
    });

    test("Render the counter component with getByAltText", () => {
        render(<Counter />);
        
        const imgElement = screen.getByAltText("testImage");

        expect(imgElement).toBeInTheDocument;
    });

    test("Render the counter component with getByDisplayValue", () => {
        
        render(<Counter value="Hello"/>);
        
        const inputElement = screen.getByDisplayValue("Hello");

        expect(inputElement).toBeInTheDocument;
    });


    test("Increments the count when the button is clicked",()=>{
        render(<Counter/>);
        
        const buttonElement = screen.getByText(/Increment/i);

        fireEvent.click(buttonElement);
        
        const countElement = screen.getByText(/Count: 1/i)

        expect(countElement).toBeInTheDocument
    })
});
