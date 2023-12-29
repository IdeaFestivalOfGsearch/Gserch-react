import HomeLogo from "../../asset/svg/HomeLogo"
import * as S from './style'
import { useNavigate } from "react-router-dom"

export default function Header({changeProfile}){
    const navigate = useNavigate();

    function goHome(){
        navigate("/home");
    }

    function profilehandler(){
        changeProfile();
    }
    
    const nickname = "test.gsm.hs.kr";

    return(
        <S.Top>
            <S.HoemBtn onClick={goHome}>
                <HomeLogo/>
            </S.HoemBtn>
            <S.BtnFrame>
                {nickname}
                <S.ProfileBtn onClick={profilehandler}/>
            </S.BtnFrame>
        </S.Top>
    )
}