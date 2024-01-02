import { useState } from "react"
import * as S from "./style"

export default function WantedItem({item:i}){
    const [isshow,setIsshow] = useState(false);

    function handleclick(){
        setIsshow(!isshow);
    }

    return(
        <div key={i.id} onClick={handleclick}>
            <S.ImgFrame>
                <img src={i.img}/>
            </S.ImgFrame>
            <S.Title>
                {i.title}
            </S.Title>
        </div>
    )
}