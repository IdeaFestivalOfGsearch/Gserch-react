import Modal from "../../Modal";
import * as S from "./style";
import StoreImg from "../../../asset/svg/Store";
import { useState } from "react";
import StoreModal from "./StoreModal";

export default function ProfileModal({changeProfile}){
    const nickname = "1501 홍길동";
    const point = "1000";
    const title = "분실물 초보";
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
                {show?<>
                <S.ProfileLeft/>
                <S.ProfileRight/>
                <S.Profilenickname>
                    {nickname}
                </S.Profilenickname>
                <S.ProfilePoint>
                    포인트 {point}P
                </S.ProfilePoint>
                <S.StoreBtn onClick={showStore}>
                    <StoreImg/>
                </S.StoreBtn>
                <S.ProfileTitle>
                    칭호 {title}
                </S.ProfileTitle>
                </>
                :<StoreModal point={point}/>
                }
            </S.ProfileFrame>
        </>
    )
}