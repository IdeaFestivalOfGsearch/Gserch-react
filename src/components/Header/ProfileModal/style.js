import styled from "styled-components";

export const ProfileFrame = styled.div`
    left: 25%;
    top: 15%;
    width: 720px;
    height: 720px;
    background-color: white;
    position: absolute;
    border-radius: 38px;
    z-index: 1000;
`

export const Profileheader = styled.div`
    position: absolute;
    z-index: 1003;
    height: 40px;
    p{
        margin-left: 24px;
        margin-top: 16px;
        font-family: EliceDXNeolli-Medium;
        font-size: 20px;
        font-weight: 300;
    }
`

export const ExitBtn = styled.button`
    position: relative;
    top: -40px;
    left: 75px;
    margin-left: 580px;
    border-radius: 10px;
    width: 30px;
    height: 30px;
    color: white;
    background-color: #0774DB;
    border: 0;
    cursor: pointer;
`

export const ProfileLeft=styled.div`
    width: 0;
    height: 0;
    border-bottom: 150px solid transparent;
    border-top: 100px solid #76C634;
    border-left: 200px solid #76C634;
    border-right: 150px solid transparent;
    border-radius: 38px 0 0 0;
`

export const ProfileRight = styled.div`
    width: 0;
    height: 0;
    margin-left: 370px;
    margin-top: 220px;
    border-top: 150px solid transparent;
    border-bottom: 100px solid #2B95E9;
    border-right: 200px solid #2B95E9;
    border-left: 150px solid transparent;
    border-radius: 0 0 38px 0;
`

export const ProfileTitle = styled.p`
    margin-top: -550px;
    margin-left: 300px;
    text-align: center;
    font-family: EliceDXNeolli-Medium;
    font-size: 60px;
    font-weight: 300;
`