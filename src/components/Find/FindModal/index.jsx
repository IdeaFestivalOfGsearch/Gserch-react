import { useState } from "react";
import Modal from "../../Modal";
import * as S from "./style"
import axios from "axios";

export default function FindModal({changeFind}){
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");

    function handleClick(){
        changeFind();
    }

    function titlechange(e) {
        setTitle(e.target.value);
    }

    function contentchange(e){
        setContent(e.target.value);
    }

    async function onSubmit(e){
        e.preventDefault();

        await axios.post("http://localhost:3001/find",{
            title:title,
            content:content,
        })
        .then((res) => {
            console.log(res.data);
            alert("등록이 완료되었습니다.");
            window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
        }

    return(
        <>
            <Modal/>
            <S.ModalFrame>
                <S.FindTitle>
                    분실했어요
                    <S.ExitBtn onClick={handleClick}>
                        X
                    </S.ExitBtn>
                </S.FindTitle>
                <form onSubmit={onSubmit}>
                    <S.FindMiddle>
                        <input 
                        type="text"
                        placeholder="제목을 입력하세요" 
                        onChange={titlechange}
                        required 
                        />
                    </S.FindMiddle>
                    <S.ContentFrame>
                        <S.Content 
                        placeholder="설명을 입력하세요(찾은 위치, 시간 등)"
                        onChange={contentchange}
                        />
                        <S.SubmitBtn type="submit">
                            완료
                        </S.SubmitBtn>
                    </S.ContentFrame>
                </form>
            </S.ModalFrame>
        </>
    )
}