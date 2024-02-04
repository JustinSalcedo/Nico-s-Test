import React, { useState } from "react";
export default function Counter({ value }: { value: string }) {
    const [contador, setContador] = useState(0);

    return (
        <div>
            {/* Render the counter component with getByText and getByTestId*/}
            <h1 data-testid="count">
                Count: {contador}
            </h1>

            <button
                data-testid="button"
                onClick={() => {
                    setContador(contador + 1);
                }}
            >
                Increment
            </button>

            {/* Render the counter component with getByRole */}

            <h1 role="title">Hola mundo</h1>

            {/* Render the counter component with getByPlaceholderText */}

            <input type="text" placeholder="input" />

            {/* Render the counter component with getByAltText */}

            <img src={require("./descarga.jpeg")} alt="testImage" />

            {/* Render the counter component with getByDisplayValue */}

            <input type="text" value={value} />;
        </div>
    );
}
