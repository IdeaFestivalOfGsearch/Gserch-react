import HomeLogo from "../../asset/svg/HomeLogo"
import * as S from './style'
import { useNavigate } from "react-router-dom"

export default function Header(){
    const navigate = useNavigate();

    const goHome = () =>{
        navigate("/");
    }
    
    const nickname = "test.gsm.hs.kr";

    return(
        <S.Top>
            <S.HoemBtn onClick={goHome}>
                <HomeLogo/>
            </S.HoemBtn>
            <S.BtnFrame>
                {nickname}
                <S.ProfileBtn/>
            </S.BtnFrame>
        </S.Top>
    )
}