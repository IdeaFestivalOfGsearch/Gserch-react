import Modal from "../../Modal";
import * as S from "./style";

export default function ProfileModal({changeProfile}){
    const nickname = "이름";
    function Modalhandler(){
        changeProfile();
    }
    return(
        <>
            <Modal/>
            <S.ProfileFrame>
                <S.Profileheader>
                    <p>
                    프로필
                    </p>
                    <S.ExitBtn onClick={Modalhandler}>
                        X
                    </S.ExitBtn>
                </S.Profileheader>
                <S.ProfileLeft/>
                <S.ProfileRight/>
                <S.ProfileTitle>
                    {nickname}
                </S.ProfileTitle>
            </S.ProfileFrame>
        </>
    )
}