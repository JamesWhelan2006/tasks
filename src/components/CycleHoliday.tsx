import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays = [
        { name: "Christmas", year: 2024 },
        { name: "Halloween", year: 2023 },
        { name: "New Year's Day", year: 2022 },
        { name: "Thanksgiving", year: 2021 },
        { name: "Valentine's Day", year: 2020 },
    ];
    const alphabetical = [...holidays].sort((a, b) =>
        a.name.localeCompare(b.name),
    );
    const byYear = [...holidays].sort((a, b) => a.year - b.year);
    const [currentList, setCurrentList] = useState(holidays);
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div>
                Holiday: {currentList[index].name} ({currentList[index].year})
            </div>
            <Button
                onClick={() => {
                    setCurrentList(alphabetical);
                    setIndex((index + 1) % alphabetical.length);
                }}
            >
                Alphabetetical
            </Button>
            <Button
                onClick={() => {
                    const currentHoliday = currentList[index];
                    const currentIndex = byYear.findIndex(
                        (holiday) => holiday.name === currentHoliday.name,
                    );
                    setCurrentList(byYear);
                    setIndex((currentIndex + 1) % byYear.length);
                }}
            >
                By Year
            </Button>
        </div>
    );
}
