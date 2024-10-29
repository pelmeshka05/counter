import styled from "styled-components"

type ButtonPropsType = {
    title: string
    onClick?: () => void
    disabled?: boolean
}

export const Button = ({title, onClick, disabled}: ButtonPropsType) => {
    return(
        <StyledButton onClick={onClick} disabled={disabled}>{title}</StyledButton>
    )
}
const StyledButton = styled.button`
max-width: 70px;
width: 100%;
height: 20px;
border: none;
border-radius: 5px;
background-color: #a2a8ba;
`