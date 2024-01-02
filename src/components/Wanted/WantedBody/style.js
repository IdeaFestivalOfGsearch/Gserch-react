import styled from "styled-components";

export const WantedContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    width: 100%;
    height: 90%;
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