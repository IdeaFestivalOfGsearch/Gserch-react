import Header from "../../components/Header"
import Find from "../../components/Find"
import Wanted from "../../components/Wanted"
import Quest from "../../components/Quest"
import FindModal from "../../components/Find/FindModal"
import { useState } from "react";
import QuestModal from "../../components/Quest/QuestModal"
import ProfileModal from "../../components/Header/ProfileModal"

export default function GSHome(){

    const [isFindshow,setIsFindshow] = useState(false);
    const [isQuestshow,setIsQuestshow] = useState(false);
    const [isProfileshow,setIsProfileshow] = useState(false);
    function openFindHandler(){
        setIsFindshow(!isFindshow);
      };

    function openQuestHandler(){
        setIsQuestshow(!isQuestshow);
    }

    function openProfileHandler(){
        setIsProfileshow(!isProfileshow);
    }

    return(
        <>
            <Header changeProfile={openProfileHandler}/>
            <Find changeFind={openFindHandler}/>
            <Wanted/>
            <Quest changeQuest={openQuestHandler}/>
            {
                isProfileshow?<ProfileModal changeProfile={openProfileHandler}/>:null
            }
            {
                isFindshow?<FindModal changeFind={openFindHandler}/>:null
            }
            {
                isQuestshow?<QuestModal changeQuest={openQuestHandler}/>:null
            }
        </>
    )
}