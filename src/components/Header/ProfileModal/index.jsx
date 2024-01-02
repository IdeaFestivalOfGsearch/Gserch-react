import Modal from "../../Modal";
import * as S from "./style";
import { useState } from "react";

export default function ProfileModal({changeProfile}){
    const nickname = "1501 홍길동";
    const [show,setShow] = useState(true);


    function Modalhandler(){
        changeProfile();
    }

    function showStore(){
        setShow(!show);
    }
    return(
        <>
            <Modal/>
            <S.ProfileFrame>
                    <S.Profileheader>
                    <p>
                    {show?"프로필":"칭호"}
                    </p>
                    <S.ExitBtn onClick={show?Modalhandler:showStore}>
                        X
                    </S.ExitBtn>
                </S.Profileheader>
                <S.ProfileLeft/>
                <S.ProfileRight/>
                <S.Profilenickname>
                    {nickname}
                </S.Profilenickname>
            </S.ProfileFrame>
        </>
    )
}