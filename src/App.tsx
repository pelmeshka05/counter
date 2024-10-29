import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { SetupByCounter } from "./components/SetupByCounet";
import styled from "styled-components";

const App = () => {
  const startValue = localStorage.getItem("startCounerValue") || 0;
  const maxValue = localStorage.getItem("maxCounerValue") || 0;

  const [errorForMainAndSrartValue, setErrorForMainAndSrartValue] =
    useState(false);
  const [errorOnChange, setErrorOnChange] = useState(false);

  const [mainValue, setMainValue] = useState(Number(startValue));
  const [maxCounterValue, setMaxCounterValue] = useState(Number(maxValue));

  return (
    <AppContainer>
      <Block>
        <SetupByCounter
          setMainValue={setMainValue}
          setErrorForMainAndSrartValue={setErrorForMainAndSrartValue}
          setErrorOnChange={setErrorOnChange}
          setMaxCounterValue={setMaxCounterValue}
        />

        <Counter
          value={mainValue}
          errorForMainAndSrartValue={errorForMainAndSrartValue}
          errorOnChange={errorOnChange}
          maxValue={maxValue}
          startV={startValue}
          setMainValue={setMainValue}
          maxCounterValue={maxCounterValue}
          startValueForExamination={startValue}
          mainValue={mainValue}
        />
      </Block>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b5485;
  width: 100%;
  height: 1000px;
`;

const Block = styled.div`
  margin: 50px 300px 50px 300px;
  display: flex;
  gap: 20px;
`;
