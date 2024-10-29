import { ChangeEvent, useState } from "react"
import s from './Input.module.css'
import { styled } from "styled-components"

type InputType = {
    value: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void 
    error: boolean
}

export const Input = ({value, onChange,error}: InputType) => {

    const finalClass = s.startMax ? (error ? s.startMax : s.default) : s.default

    const onChangekHandler = (e: ChangeEvent<HTMLInputElement>) => {
   onChange?.(e)
    }

    return(
        <InputComponent className={finalClass} type="number" value={value} onChange={onChangekHandler} />
    )
}


const InputComponent = styled.input`
border: none;
border-radius: 5px;
height: 25px;
`