import styled from "styled-components";

export const LoginBack = styled.div`
    position: absolute;
    margin: -20px;
    width: 1200%;
    height: 1200vh;
    background-color: black;
    background-repeat: repeat;
    background-size: cover;
    z-index: -1;
`

export const Logo = styled.div`
    > *{
        width: 40vw;
        height: 40vh;
    }
`

export const FirstPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
        color: #0774DB; 
        text-align: center;
        font-size: 21px;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 2px;
    }
`

export const LoginBtn = styled.p`
    margin-left: 95vw;
    color: #0A72DA;
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    z-index: 1;
    cursor: pointer;
`