import styled from "styled-components";

export const FindContent = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 100%;
    height: 72%;
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