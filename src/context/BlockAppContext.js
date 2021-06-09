import React, { createContext, useState, useEffect } from "react";

const BlockContext = createContext();

const ContextProvider = ({ children }) => {
  const [difficultyOptions, setDifficultyOptions] = useState([]);
  const [buttonsArray, setButtonsArray] = useState([]);
  const [difficultyInfo, setDifficultyInfo] = useState({
    difficulty: "",
    amount: 5,
  });

  useEffect(() => {
    fetch("https://demo1030918.mockable.io/")
      .then((response) => response.json())
      .then((result) => {
        setDifficultyOptions(Object.entries(result));
      })
      .catch((error) => alert(`Error: ${error}`));
  }, []);

  const selectDifficulty = (option) => {
    for (let i = 0; i < difficultyOptions.length; i++) {
      if (option === difficultyOptions[i][0]) {
        setDifficultyInfo({
          ...difficultyInfo,
          difficulty: option,
          amount: difficultyOptions[i][1].field,
        });
      }
    }
  };

  const countAndDisplayBlocks = () => {
    let finalResult = [];
    if (difficultyInfo) {
      for (let i = 0; i < difficultyInfo.amount; i++) {
        finalResult.push({
          number: i + 1,
          chosen: false,
          row: Math.floor(i / 5),
          column: i % 5,
        });
      }
    }
    setButtonsArray(finalResult);
  };

  const hoverHandler = (item) => {
    const updatedButtonsArray = buttonsArray.map((el) => {
      return el.number === item.number ? { ...el, chosen: !el.chosen } : el;
    });
    setButtonsArray(updatedButtonsArray);
  };

  return (
    <BlockContext.Provider
      value={{
        difficultyOptions,
        selectDifficulty,
        difficultyInfo,
        countAndDisplayBlocks,
        buttonsArray,
        hoverHandler,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

export { ContextProvider, BlockContext };
