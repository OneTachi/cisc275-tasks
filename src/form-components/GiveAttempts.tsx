import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<string>("");
    const add: number = parseInt(requestAttempts) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attempts}</p>
            <Form.Group controlId="requestAttempts">
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestAttempts(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + add);
                    setRequestAttempts("");
                }}
            >
                gain
            </Button>
        </div>
    );
}
