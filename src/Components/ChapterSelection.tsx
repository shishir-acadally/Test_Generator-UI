// src/components/ChapterSelection.js

import React, { useState } from "react";
import "../css/chapterSelection.css"
import chapters from "../Data/chapters"; // Import the chapter data

const ChapterSelection = ({ onChapterSelect }: { onChapterSelect: any }) => {
    const [selectedChapter, setSelectedChapter] = useState("");
    const [chapterOptions, setChapterOptions] = useState<any>([]); // To store chapter name suggestions

    // Function to handle chapter selection
    const handleChapterSelection = (event: any) => {
        let chapterName = String(event.target?.value || event);
        if (chapterName === '[object Object]')
            chapterName = '';

        // Fetch chapter suggestions from the backend (you'll need to implement this)
        // You can use the fetch API or a library like Axios to make the API call.
        // For now, let's simulate suggestions.
        let suggestions = chapters
            .filter((chapter) =>
                chapter.name.toLowerCase().includes(chapterName.toLowerCase())
            ).filter((chapter) =>
            (chapter.courseid === 5 || chapter.courseid === 0  || chapter.courseid === 4 || chapter.courseid === 3 || chapter.courseid === 6))
            .map((chapter) => chapter.name);
            if(suggestions[0]===chapterName)
            suggestions=[];
        setChapterOptions(suggestions);
        // Call the parent component's function to notify about chapter selection
            onChapterSelect(chapterName);
            setSelectedChapter(chapterName);


    };

    return (
        <div className="chapter-selection">
            <h3>Chapter Selection</h3>
            <input
                type="text"
                placeholder="Select a chapter"
                value={selectedChapter}
                onChange={handleChapterSelection}
            />
            <ul className="chapter-suggestions">
                {chapterOptions.map((chapterName: any, index: any) => (
                    <li key={index} onClick={() => handleChapterSelection(chapterName)}>
                        {chapterName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChapterSelection;
