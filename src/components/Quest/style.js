import styled from "styled-components";

export const QuestFrame = styled.div`
    background-color: white;
    width: 35%;
    height:24%;
    flex-shrink: 0;
    position: absolute;
    left: 50%;
    top: 16%;
    border: 1px solid none;
    border-radius: 3vw;
    box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.21);
    display: flex ;
    justify-content: center;
    align-items: center;
    color: #000;
    font-family: EliceDXNeolli-Light;
    font-size: 4vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    >*{
        width: 15%;
    }
`