import styled from "styled-components";

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
`
export const HoemBtn = styled.div`
    > *{
        width:250px;
        height: 68px;
        cursor: pointer;
    }
`

export const ProfileBtn = styled.button`
    margin: 0 20px 0 20px;
    width: 55px;
    height: 55px;
    background: #0774DB;
    border-radius: 18px;
    border-width: 0;
    cursor: pointer;
`

export const BtnFrame = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    font-family: EliceDXNeolli-Light;
    font-size: 20px;
    font-weight: 300;
`