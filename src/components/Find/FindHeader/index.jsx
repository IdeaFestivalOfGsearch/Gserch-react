import * as S from "./style"
import FindImg from "../../../asset/svg/Find"

export default function FindHeader({changeState}){

    function handleclick(){
        changeState();
    }

    return(
        <>
        <S.FindFrame>
            <S.Findheader>
                <S.FindIcon>
                    <FindImg/>
                </S.FindIcon>
                <S.FindTitle>
                    찾은 분실물
                </S.FindTitle>
            </S.Findheader>
            <S.FindBtn onClick={handleclick}>
                발견했어요
            </S.FindBtn>
        </S.FindFrame>
        </>
    )
}