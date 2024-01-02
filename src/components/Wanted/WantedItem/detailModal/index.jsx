import Modal from "../../../Modal";
import * as S from "./style"

export default function detailModal(title,content,imageSrc){
    return(
        <>
            <Modal/>
            <S.ModalFrame>
                <S.QuestTitle>
                    분실물
                    <S.ExitBtn onClick={handleClick}>
                        X
                    </S.ExitBtn>
                </S.QuestTitle>
                <S.QuestMiddle>
                    <p>
                        {title}
                    </p>
                    <img src={imageSrc}></img>
                </S.QuestMiddle>
                <S.ContentFrame>
                    <S.Content 
                    readOnly
                    value={content}
                    />
                </S.ContentFrame>
            </S.ModalFrame>
        </>
    )
}