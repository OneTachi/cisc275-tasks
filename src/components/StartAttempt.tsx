import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={(): void => {
                    setProgress(true);
                    setAttempts(attempts - 1);
                }}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>

            <Button
                onClick={(): void => {
                    setProgress(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={(): void => {
                    setAttempts(attempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <div>Attempts: {attempts}</div>
        </div>
    );
}
