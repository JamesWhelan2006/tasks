import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [started, setStarted] = useState(false);

    return (
        <div>
            <div>{attempts}</div>
            <Button
                disabled={started || attempts === 0}
                onClick={() => {
                    setAttempts(attempts - 1);
                    setStarted(true);
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={!started}
                onClick={() => {
                    setStarted(false);
                }}
            >
                Stop Quiz
            </Button>
            <Button
                disabled={started}
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
            >
                Mulligan
            </Button>
        </div>
    );
}
