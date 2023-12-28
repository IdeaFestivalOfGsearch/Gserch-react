import Modal from "../../Modal";
import * as S from "./style"

export default function FindModal({changeFind}){

    function handleClick(){
        changeFind();
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
                </S.FindMiddle>
                <S.ContentFrame>
                    <S.Content placeholder="설명을 입력하세요(찾은 위치, 시간 등)"/>
                    <S.SubmitBtn>
                        완료
                    </S.SubmitBtn>
                </S.ContentFrame>
            </S.ModalFrame>
        </>
    )
}