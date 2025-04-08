import React, { useState } from "react";
import "../css/LearningUnitSelection.css";

const LearningUnitSelection = ({ learningUnits, prerequisiteLUs, onLearningUnitSelect }: { learningUnits: any, prerequisiteLUs: any, onLearningUnitSelect: any }) => {
  const [selectedLearningUnit, setSelectedLearningUnit] = useState(null);
  const [showPrerequisites, setShowPrerequisites] = useState(false);  // State to toggle between lists

  // Handle user selection and trigger actions when a learning unit is selected
  const handleLearningUnitSelect = (lu: any) => {
    setSelectedLearningUnit(lu);
    onLearningUnitSelect(lu);
  };

  // Toggle function to switch between learning units and prerequisites
  const toggleView = () => {
    setShowPrerequisites(!showPrerequisites);
  };

  return (
    <div className="learning-unit-selection">
      <button onClick={toggleView} className="toggle-button">
        {showPrerequisites ? "Prerequisite Learning Units" : "Learning Units"}
      </button>
      
      {showPrerequisites ? (
        <div>
          {/* <h3>Prerequisite Learning Units</h3> */}
          <ul>
            {prerequisiteLUs.map((lu: any) => (
              <li 
              className={lu.Name === selectedLearningUnit ? "selected" : ""}
              key={lu.ID} onClick={() => handleLearningUnitSelect(lu)}>
              {"["+lu.ID+"]"}  {lu.Name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          {/* <h3>Learning Units</h3> */}
          <ul>
            {learningUnits.map((lu: any) => (
              <li 
              className={lu.Name === selectedLearningUnit ? "selected" : ""}
              key={lu.ID} onClick={() => handleLearningUnitSelect(lu)}>
              {"["+lu.ID+"]"}  {lu.Name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LearningUnitSelection;
