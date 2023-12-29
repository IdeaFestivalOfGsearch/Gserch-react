import * as S from "./style"
import LoginLogo from "../../asset/svg/LoginLogo"
import EmailLogo from "../../asset/svg/EmailLogo"
import { useState } from "react"

export default function Login(){
    const [email,setEmail] = useState("");

    function changeEmail(e){
        setEmail(e.target.value);
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
                <S.LoginBtn>
                    로그인
                </S.LoginBtn>
            </S.LoginPage>
        </S.LoginBack>
    )
}