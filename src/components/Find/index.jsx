import * as S from "./style";
import FindHeader from "./FindHeader";
import FindBody from "./FindBody";

export default function Find({changeFind}){

    function changeState(){
        changeFind();
    }

    return(
        <S.Frame>
            <FindHeader changeState={changeState}/>
            <FindBody/>
        </S.Frame>
    )
}