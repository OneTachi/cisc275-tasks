import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Diwali"
        | "Christmas"
        | "Halloween"
        | "Fourth"
        | "Lunar New Year";

    const alphabet: Record<Holiday, Holiday> = {
        Christmas: "Diwali",
        Diwali: "Fourth",
        Fourth: "Halloween",
        Halloween: "Lunar New Year",
        "Lunar New Year": "Christmas"
    };
    const date: Record<Holiday, Holiday> = {
        Christmas: "Lunar New Year",
        Diwali: "Christmas",
        Fourth: "Halloween",
        Halloween: "Diwali",
        "Lunar New Year": "Fourth"
    };
    const emoji: Record<Holiday, string> = {
        Christmas: "☃️",
        Diwali: "🪔",
        Fourth: "🎆",
        Halloween: "🎃",
        "Lunar New Year": "🐉"
    };

    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    return (
        <div>
            <Button onClick={(): void => setHoliday(alphabet[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={(): void => setHoliday(date[holiday])}>
                Advance by Year
            </Button>
            <span>Holiday: {emoji[holiday]}</span>
        </div>
    );
}
