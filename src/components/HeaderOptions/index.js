import React, { useContext } from "react";
import "./index.css";

import { BlockContext } from "../../context/BlockAppContext";
const HeaderOptions = () => {
  const { difficultyOptions, selectDifficulty, countAndDisplayBlocks } =
    useContext(BlockContext);

  return (
    <div>
      <select
        className="selector-dropdown"
        onChange={(e) => selectDifficulty(e.currentTarget.value)}
      >
        {difficultyOptions.length > 0 &&
          Object.values(difficultyOptions).map((item, index) => {
            return (
              <option className="option-selector" key={index}>
                {item[0]}
              </option>
            );
          })}
      </select>

      <button className="start-button" onClick={countAndDisplayBlocks}>
        Start
      </button>
    </div>
  );
};

export default HeaderOptions;
