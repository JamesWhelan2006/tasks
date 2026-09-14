import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState("Short Answer");

    return (
        <div>
            <div>{type}</div>
            <Button
                onClick={() => {
                    setType(
                        type === "Short Answer" ? "Multiple Choice" : (
                            "Short Answer"
                        ),
                    );
                }}
            >
                Change Type
            </Button>
        </div>
    );
}
