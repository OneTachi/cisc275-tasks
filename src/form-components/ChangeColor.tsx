import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors: string[] = [
        "blue",
        "cyan",
        "green",
        "orange",
        "pink",
        "purple",
        "red",
        "yellow"
    ];
    const [chosen, setChosen] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string): JSX.Element => {
                return (
                    <span key={color}>
                        <Form.Check
                            inline
                            label={color}
                            style={{ backgroundColor: color }}
                            key={color}
                            type="radio"
                            name="colors"
                            checked={chosen === color}
                            value={color}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setChosen(event.target.value)}
                        />
                    </span>
                );
            })}
            <p>You have chosen: </p>
            <p
                data-testid="colored-box"
                style={{ display: "inline", backgroundColor: chosen }}
            >
                {chosen}
            </p>
        </div>
    );
}
