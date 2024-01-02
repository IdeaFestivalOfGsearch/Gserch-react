import styled from "styled-components";

export const ModalFrame = styled.div`
    left: 25%;
    top: 15%;
    width: 42%;
    height: 75%;
    background-color: white;
    position: absolute;
    border-radius: 40px;
    z-index: 1000;
`

export const QuestTitle = styled.div`
    height: 40px;
    margin-left: 24px;
    margin-top: 16px;
    font-family:  EliceDXNeolli-Medium;
    font-size: 20px;
    font-weight: 300;
`

export const ExitBtn = styled.button`
    position: relative;
    left: 78%;
    border-radius: 1vh;
    width: 2vw;
    height: 2vw;
    color: white;
    background-color: #0774DB;
    border: 0;
    cursor: pointer;
`

export const QuestMiddle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    input{
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        font-family: EliceDXNeolli-Medium;
        width: 18vw;
        height: 40px;
        outline: 0;
        margin-top: 20px;
        border-left-width:0; 
        border-right-width:0; 
        border-top-width:0; 
        border-bottom-width:1px;
    }
`

export const Upload = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F4F4F4;
    border-radius: 40px;
    width: 12vw;
    height: 12vw;
    box-shadow: 0px 3px 20px 1px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    input{
        display: none;
    }
    img{
        border-radius: 40px;
        width: 12vw;
        height: 12vw;
    }
`

export const ContentFrame = styled.div`
    width: 85%;
    height: 35vh;
    margin-left: 8%;
    margin-top: 5%;
    border-radius: 40px;
    background: #F4F4F4;
    box-shadow: 0px 3px 20px 1px rgba(0, 0, 0, 0.25);
`

export const Content = styled.textarea`
    font-family: EliceDXNeolli-Medium;
    resize: none;
    border: none;
    outline: #000;
    background: #F4F4F4;
    margin-top: 20px;
    margin-left: 20px;
    width: 92%;
    height: 30vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 25px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: hsla(0, 0%, 42%, 0.49);
        border-radius: 100px;
        background-clip: padding-box;
        border: 10px solid transparent;
    }
`

export const SubmitBtn = styled.button`
    width: 50px;
    height: 8px;
    background: #97CCFF;
    box-shadow: 0px 1.238px 8.255px 0.413px rgba(0, 0, 0, 0.25);
    position: relative;
    top: -30px;
    margin-left: 85%;
    border: none;
    border-radius: 5px;
    width: 3vw;
    height: 28px;
    font-family:  EliceDXNeolli-Light;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
`