import * as S from "./style"

export default function FindItem({item:i}){
    return(
        <S.Frame key={i.id}>
            <S.Title>
                {i.title}
            </S.Title>
            <S.Content>
                {i.content}
            </S.Content>
        </S.Frame>
    )
}