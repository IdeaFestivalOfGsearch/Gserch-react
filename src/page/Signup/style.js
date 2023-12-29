import styled from "styled-components";

export const LoginBack = styled.div`
    margin: -20px;
    width: 1200%;
    height: 1200vh;
    background-color: black;
    background-repeat: repeat;
    background-size: cover;
`

export const LoginPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Logo = styled.div`
    > *{
        width: 250px;
        height: 250px;
    }
`

export const EmailBack = styled.div`
    width:500px;
    height:80px;
    border-radius: 30px;
    border: none;
    margin-top: 20px;
    background-color: #fff;
    display: flex;
    align-items: center;
    input{
        padding: 0;
        width:375px;
        height: 50px;
        outline: none;
        border: none;
        font-size: 20px;
    }
`

export const EmailLogo= styled.div`
    display: flex;
    align-items: center;
    >*{
        width: 4vw;
        margin-left: 10px;
    }
`

export const LoginBtn = styled.button`
    font-size: 30px;
    font-family: EliceDXNeolli-Light;
    width:500px;
    height:70px;
    border-radius: 20px;
    margin-top: 50px;
    background-color: #0774DB;
    border: none;
    cursor: pointer;
`