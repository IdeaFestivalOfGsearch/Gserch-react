import * as S from "./style"
import WantedBody from "./WantedBody"
import WantedHeader from "./WantedHeader"

export default function Wanted(){
    return(
        <S.Frame>
             <WantedHeader/>
             <WantedBody/>
        </S.Frame>
    )
}