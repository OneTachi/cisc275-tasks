import exp from "constants";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    const copied_options = [...options];
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select
                value={answer}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
                    setAnswer(event.target.value)
                }
            >
                {copied_options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
