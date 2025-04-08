// src/components/LearningOutcomes.js

import React, { useState } from "react";
import "../css/LearningOutcomes.css"
const LearningOutcomes = ({ outcomes, onSave, onSelect }: {outcomes: any, onSave: any, onSelect: any}) => {
    const [selectedOutcome, setSelectedOutcome] = useState(true);
    const [userEdits, setUserEdits] = useState("");

    const handleOutcomeSelect = (outcome: any) => {
        setSelectedOutcome(outcome);
        onSelect(outcome);

        setUserEdits(""); // Clear user edits when a new outcome is selected
    };

    const handleEditsChange = (e: any) => {
        setUserEdits(e.target.value);
    };

    const handleSave = () => {
        // Implement the save logic using the onSave prop
        onSave(userEdits);
        setUserEdits(""); // Clear user edits when a new outcome is selected
    };

    function returnLOVerb(loid: any) {
        switch (parseInt(loid.slice(-1)) % 6) {
            case 1: return "Remember";
            case 2: return "Understand";
            case 3: return "Apply";
            case 4: return "Analyze";
            case 5: return "Evaluate";
            case 0: return "Create";
        }
    }

    return (
        <div className="learning-outcomes">
            <div className="edits-section">
            {selectedOutcome && (
                <div >
                    <textarea
                        id="edits"
                        placeholder="Suggested edits"
                        value={userEdits}
                        onChange={handleEditsChange}
                    ></textarea>
                    <p>
                        <button onClick={handleSave}>Save Tagging</button>

                    </p>
                </div>
            )}
            </div>
           
            <h3>Learning Outcomes</h3>
            <ul>
                {outcomes.map((outcome: any) => (
                    <li key={outcome.ID} onClick={() => handleOutcomeSelect(outcome)}>
                       {"["+outcome.ID+"]"}  {"(" + returnLOVerb(outcome.ID)+")"}: {outcome.Name}
                    </li>
                ))}
            </ul>


        </div>
    );
};

export default LearningOutcomes;
