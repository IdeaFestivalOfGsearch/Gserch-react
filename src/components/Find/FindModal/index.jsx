import UploadImg from "../../../asset/svg/UploadImg";
import Modal from "../../Modal";
import * as S from "./style"

export default function FindModal({changeStates}){

    function handleClick(){
        changeStates();
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
                <S.FindMiddle>
                    <input 
                    type="text"
                    placeholder="제목을 입력하세요" 
                    required 
                    />
                    <S.Upload>
                        <UploadImg/>
                    </S.Upload>
                </S.FindMiddle>
                <S.ContentFrame>
                    <S.Content placeholder="설명을 입력하세요(잃어버린 위치, 시간 등)"/>
                </S.ContentFrame>
            </S.ModalFrame>
        </>
    )
}