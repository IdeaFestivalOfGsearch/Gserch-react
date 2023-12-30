import * as S from "./style"
import WantedImg from "../../../asset/svg/WantedLogo"

export default function Wanted(){
    return(
        <S.WantedFrame>
             <S.Wantedheader>
                <S.WantedIcon>
                    <WantedImg/>
                </S.WantedIcon>
                <S.WantedTitle>
                    찾고있는 분실물
                </S.WantedTitle>
            </S.Wantedheader>
        </S.WantedFrame>
    )
}