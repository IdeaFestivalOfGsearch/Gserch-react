import * as S from "./style"
import LoginLogo from "../../asset/svg/LoginLogo"
import EmailLogo from "../../asset/svg/EmailLogo"
import PassWordLogo from "../../asset/svg/PassWordLogo"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const [email,setEmail] = useState("");
    const [pw,setPw] = useState("");
    const navigate = useNavigate();

    function changeEmail(e){
        setEmail(e.target.value);
    }

    function changePw(e){
        setPw(e.target.value);
    }

    function goSignup(){
        navigate("/signup");
    }

    return(
        <S.LoginBack>
            <S.LoginPage>
                <S.Logo>
                    <LoginLogo/>
                </S.Logo>
                <S.EmailBack>
                    <S.EmailLogo>
                        <EmailLogo/>
                    </S.EmailLogo>
                    <input
                    type="email" 
                    placeholder="이메일" 
                    required 
                    onChange={changeEmail} 
                    value={email} 
                    >
                    </input>
                    
                </S.EmailBack>
                <S.PwBack>
                    <S.PwLogo>
                        <PassWordLogo/>
                    </S.PwLogo>
                    <input
                    type="password" 
                    placeholder="비밀번호" 
                    required 
                    onInput={changePw} 
                    value={pw}
                    >
                    </input>
                </S.PwBack>
                <S.LoginBtn>
                    로그인
                </S.LoginBtn>
                <S.SignUpBtn onClick={goSignup}>
                    회원가입
                </S.SignUpBtn>
            </S.LoginPage>
        </S.LoginBack>
    )
}