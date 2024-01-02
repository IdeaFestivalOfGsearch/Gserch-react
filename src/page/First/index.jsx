import * as S from "./style"
import LoginLogo from "../../asset/svg/LoginLogo"
import { useNavigate } from "react-router-dom"

export default function First(){
    const navigator = useNavigate();

    function goLogin(){
        navigator("/login");
    }

    return(
        <>
            <S.LoginBack>
                    <S.LoginBtn onClick={goLogin}>
                        Login
                    </S.LoginBtn>
                <S.FirstPage>
                    <S.Logo>
                        <LoginLogo/>
                    </S.Logo>
                    <p>
                        분실물은 뭐든지 찾아낸다
                    </p>
                </S.FirstPage>
            </S.LoginBack>
        </>
    )
}