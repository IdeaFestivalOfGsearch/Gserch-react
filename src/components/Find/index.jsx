import * as S from "./style";
import FindHeader from "./FindHeader";

export default function Find({changeStates}){

    function changeState(){
        changeStates();
    }

    return(
        <S.Frame>
            <FindHeader changeState={changeState}/>
        </S.Frame>
    )
}