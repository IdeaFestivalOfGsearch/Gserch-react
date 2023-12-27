import Header from "../../components/Header"
import Find from "../../components/Find"
import Wanted from "../../components/Wanted"
import Quest from "../../components/Quest"
import FindModal from "../../components/Find/FindModal"
import { useState } from "react";

export default function GSHome(){

    const [isshow,setIsshow] = useState(false);
    const openModalHandler = () => {
        setIsshow(!isshow);
        console.log("alsdkfja");
      };


    return(
        <>
            <Header/>
            <Find changeStates={openModalHandler}/>
            {
                isshow?<FindModal changeStates={openModalHandler}/>:null
            }
            <Wanted/>
            <Quest/>
        </>
    )
}