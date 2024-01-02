import useFetch from "../../../hooks/useFetch"
import FindItem from "../FindItem";
import * as S from "./style"

export default function FindBody(){
    const find = useFetch("http://localhost:3001/find");
    return(
        <>
            <S.FindContent>
                {find&&find.map(item=>(
                    <FindItem key={item.id} item={item}/>
                ))}
            </S.FindContent>
        </>
    )
}