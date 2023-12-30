import { useState,useRef } from "react";
import UploadImg from "../../../asset/svg/UploadImg";
import Modal from "../../Modal";
import * as S from "./style"
import axios from "axios";

export default function QuestModal({changeQuest}){
    const fileInputRef = useRef(null);
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [able,setAble] = useState(true);

    function titlechange(e) {
        setTitle(e.target.value);
    }

    function contentchange(e){
        setContent(e.target.value);
    }

    function onclickUploadImg(){
        fileInputRef.current.click();
    }

    function handleClick(){
        changeQuest();
    }

    const encodeFileToBase64 = (fileBlob) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      return new Promise((resolve) => {
        reader.onload = () => {
          setImageSrc(reader.result);
          resolve();
        };
      });
    };

    function changeImg(e){
        if(able===true){
            setAble(!able);
        }
        encodeFileToBase64(e.target.files[0]);
    }

    function onSubmit(e){
        e.preventDefault();
    
        let formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("uploadFile", document.frm.uploadFile.files[0]);

        axios
            .post("http://localhost:3001/form", title)
            .then((res) => {
                console.log(res.data);
                alert("file upload success");
            })
            .catch((error) => {
                alert("file upload fail");
            });
        }
    
    return(
        <>
            <Modal/>
            <S.ModalFrame>
                <S.QuestTitle>
                    발견했어요
                    <S.ExitBtn onClick={handleClick}>
                        X
                    </S.ExitBtn>
                </S.QuestTitle>
                <S.QuestMiddle>
                    <input 
                    value={title}
                    onChange={titlechange}
                    type="text"
                    placeholder="제목을 입력하세요" 
                    multiple
                    required 
                    />
                    <S.Upload onClick={onclickUploadImg}>
                        {able?<UploadImg/>:<img src={imageSrc}></img>}
                        <input 
                        type="file" 
                        accept = "image/*"
                        hidden
                        ref={fileInputRef}
                        onChange={changeImg}
                        />
                    </S.Upload>
                </S.QuestMiddle>
                <S.ContentFrame>
                    <S.Content 
                    value={content} 
                    placeholder="설명을 입력하세요(찾은 위치, 시간 등)"
                    onChange={contentchange}/>
                    <S.SubmitBtn type="submit" onSubmit={onSubmit}>
                        완료
                    </S.SubmitBtn>
                </S.ContentFrame>
            </S.ModalFrame>
        </>
    )
}