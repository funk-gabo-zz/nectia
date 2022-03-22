import styled from "styled-components";

export const FormContainer = styled.div`
    background-color: #051367;
    min-height: 200px;
    border-radius:20px;
    width: 100%;
    max-width: 400px;
    box-shadow: 5px 3px 15px 3px black;
    padding: 20px 20px;
    h3{
        margin:10px 0;
    }
    input{
        font-size: 20px;
        border-radius: 50px;
        padding: 7px 15px;
        outline: none
    }
    button{
        background-color: #5D8BF4;
        border: none;
        border-radius: 20px;
        padding: 4px 10px;
        font-size: 18px;
        margin-top: 5px;
    }
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    min-height: 130px;
    width: 100%;
`