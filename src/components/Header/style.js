import styled from "styled-components";

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
`
export const HoemBtn = styled.div`
    > *{
        width:16vw;
        height: 4vw;
        cursor: pointer;
    }
`

export const ProfileBtn = styled.button`
    margin: 0 20px 0 20px;
    width: 3vw;
    height: 3vw;
    background: #0774DB;
    border-radius: 1vw;
    border-width: 0;
    cursor: pointer;
`

export const BtnFrame = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    font-family: EliceDXNeolli-Light;
    font-size: 1.5vw;
    font-weight: 300;
`