import styled from "styled-components";
import { Button } from "./button/Button";
import { useEffect, useState } from "react";
import s from './Counter.module.css'

type CounterType = {
  value: number;
  errorForMainAndSrartValue: boolean
  errorOnChange: boolean
  maxValue: number | string
  startV: number | string
  mainValue: string | number
  maxCounterValue: number
  startValueForExamination: string | number
  setMainValue: (value: number) => void;
};



export const Counter = ({value, maxCounterValue, setMainValue,startValueForExamination ,mainValue,errorForMainAndSrartValue,errorOnChange}: CounterType) => {

const textForMainAndStartValue = "Incorrect Value"
const textForErrorOnChange = "enter values and press set"

const errorForStartAndMaxValue = mainValue === maxCounterValue ? true : false

const Disabled = value >= (maxCounterValue) ? true : false

const valueBlockClass = s.error ? (errorForStartAndMaxValue ? s.error : s.default) : s.default


  useEffect(
    () => {
      localStorage.setItem("counterValue", String(value))
    },
    [value]
  );

  const onClickHandler = () => {
    setMainValue(value + 1);
  };

  const resetHandler = () => {
    setMainValue(Number(startValueForExamination));
  };

  

  return (
    <MainBlock>
      <ValueBlock className={valueBlockClass}>{errorForMainAndSrartValue ? textForMainAndStartValue : errorOnChange ? textForErrorOnChange : value }</ValueBlock>

      <ButtonBlock>
        <Button title="inc" onClick={onClickHandler} disabled = {Disabled}></Button> 
        <Button title="reset" onClick={resetHandler}></Button>
      </ButtonBlock>
    </MainBlock>
  );
};

const MainBlock = styled.div`
  width: 200px;
  height: 160px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonBlock = styled.div`
  width: 170px;
  height: 60px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const ValueBlock = styled.div`
  width: 170px;
  height: 100px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;


`;
