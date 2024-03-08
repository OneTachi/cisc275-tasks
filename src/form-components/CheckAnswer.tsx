import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <Form.Group controlId="answerQuestion">
                <Form.Label>Enter your answer here!</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Answer"
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(event.target.value)
                    }
                />
            </Form.Group>
            {answer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
            <h3>Check Answer</h3>
        </div>
    );
}
