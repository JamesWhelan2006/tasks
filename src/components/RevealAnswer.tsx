import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [revealed, setRevealed] = useState(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setRevealed(!revealed);
                }}
            >
                Reveal Answer
            </Button>
            {revealed && <div>42</div>}
        </div>
    );
}
