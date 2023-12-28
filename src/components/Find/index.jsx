import * as S from "./style";
import FindHeader from "./FindHeader";

export default function Find({changeFind}){

    function changeState(){
        changeFind();
    }

    return(
        <S.Frame>
            <FindHeader changeState={changeState}/>
        </S.Frame>
    )
}