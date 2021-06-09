import React, { useContext } from "react";

import "./index.css";

import { BlockContext } from "../../context/BlockAppContext";

const HoveredSquares = () => {
  const { buttonsArray } = useContext(BlockContext);
  return (
    <div>
      <h2>Hovered elements</h2>
      {buttonsArray.map((el, index) => {
        return (
          el.chosen && (
            <button className="hovered-button" key={index}>
              Number:{el.number} Row:{el.row + 1} Column:{el.column + 1}
            </button>
          )
        );
      })}
    </div>
  );
};

export default HoveredSquares;
