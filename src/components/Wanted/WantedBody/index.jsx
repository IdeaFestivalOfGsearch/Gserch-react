import useFetch from "../../../hooks/useFetch";
import WantedItem from "../WantedItem";
import * as S from "./style"

export default function WantedBody(){
    const Wanted = useFetch("http://localhost:3001/quest");
    return(
        <>
            <S.WantedContent>
                {Wanted&&Wanted.map(item=>(
                    <WantedItem key={item.id} item={item}/>
                ))}
            </S.WantedContent>
        </>
    )
}