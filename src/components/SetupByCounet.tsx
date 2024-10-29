import styled from "styled-components";
import { Button } from "./button/Button";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "./input/Input";

type SetupByCounter = {
  setMainValue: (mainValue: number) => void;
  setMaxCounterValue: (maxCounterValue: number) => void;
  setErrorForMainAndSrartValue: (errorForMainAndSrartValue: boolean) => void;
  setErrorOnChange: (errorOnChange: boolean) => void;
};

export const SetupByCounter = ({
  setMainValue,
  setMaxCounterValue,
  setErrorForMainAndSrartValue,
  setErrorOnChange,
}: SetupByCounter) => {

  const maxCounterValue = localStorage.getItem("maxCounerValue");
  const startCounterValue = localStorage.getItem("startCounerValue");

  const [maxValue, setMaxValue] = useState(String(maxCounterValue));
  const [startValue, setStartValue] = useState(String(startCounterValue));

  const errorForInput = Number(maxValue) <= Number(startValue) || Number(startValue) < 0? true: false;

  const onClickHandler = () => {
    localStorage.setItem("maxCounerValue", maxValue);
    localStorage.setItem("startCounerValue", startValue);
    setMaxCounterValue(Number(maxValue));
    setMainValue(Number(startValue));
    setErrorOnChange(false)
  };

  const updateMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(e.currentTarget.value);
    setErrorOnChange(true);
    if (e.currentTarget.value <= startValue) {
      setErrorForMainAndSrartValue(true);
    } else setErrorForMainAndSrartValue(false);
  };

  const updateStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(e.currentTarget.value);
    setErrorOnChange(true);
    if (
      e.currentTarget.value >= maxValue ||
      Number(e.currentTarget.value) < 0
    ) {
      setErrorForMainAndSrartValue(true);
    } else setErrorForMainAndSrartValue(false);
    
  };

  return (
    <MainBlock>
      <ValueBlock>
        Max Value:
        <Input error={errorForInput} value={maxValue} onChange={updateMaxValue} />
        Start Value:
        <Input error={errorForInput} value={startValue} onChange={updateStartValue} />
      </ValueBlock>

      <ButtonBlock>
        <Button title="set" disabled={errorForInput} onClick={onClickHandler}></Button>
      </ButtonBlock>
    </MainBlock>
  );
};

const MainBlock = styled.div`
  width: 270px;
  height: 200px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonBlock = styled.div`
  width: 250px;
  height: 60px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 10px;
`;

const ValueBlock = styled.div`
  width: 250px;
  height: 170px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;
