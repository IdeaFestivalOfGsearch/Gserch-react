import QuestLogo from "../../asset/svg/QuestLogo"
import * as S from "./style"

export default function Quest({changeQuest}){
    return(
        <S.QuestFrame onClick={changeQuest}>
            <QuestLogo/>
            분실물 신청
        </S.QuestFrame>
    )
}