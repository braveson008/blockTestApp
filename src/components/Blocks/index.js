import React, { useContext } from "react";

import "./index.css";

import { BlockContext } from "../../context/BlockAppContext";

import HoveredSquares from "../HoveredSquares";

const Blocks = () => {
  const { buttonsArray, hoverHandler } = useContext(BlockContext);

  return (
    <>
      {buttonsArray.length > 0 && (
        <div className="block-container">
          {buttonsArray.map((item, index) => {
            return (
              <button
                onMouseEnter={() => hoverHandler(item)}
                className={
                  item.chosen ? "selected-button-block" : "block-button"
                }
                key={index}
              >
                {item.number}
              </button>
            );
          })}
        </div>
      )}

      {buttonsArray.length > 0 && <HoveredSquares />}
    </>
  );
};

export default Blocks;
