import React, { useEffect, useState } from 'react'
import Sidebarbtn from "./Sidebarbtn";
import "./Sidebar.css"

import {VscLibrary} from "react-icons/vsc"
import {HiOutlinePlay} from "react-icons/hi"
import {AiOutlineHeart,AiOutlineFire,AiOutlineLogout} from "react-icons/ai"
import {BsMusicNoteList} from "react-icons/bs"
import apiclient from '../spotify';


export default function Sidebar
() {
  const [profileimg,setprofileimage]=useState(" ");
  useEffect(() => {
    apiclient.get("me").then((response)=>{
      setprofileimage(response.data.images[0].url);
    });
  },[]);
  return (


    <div className='sidebar'>
      <div>

        <img src={profileimg} alt="Profileimg"  />
      </div>
          

        
        <div>
          
        <Sidebarbtn To="/Favorites" Title="Favorites" Icon={<AiOutlineHeart/>} ></Sidebarbtn>
        <Sidebarbtn To="/Library" Title="Library" Icon={<VscLibrary/>} ></Sidebarbtn>
        <Sidebarbtn To="/Player" Title="Player" Icon={<HiOutlinePlay/>} ></Sidebarbtn>
        <Sidebarbtn To="/Trending" Title="Trending" Icon={<AiOutlineFire/>} ></Sidebarbtn>
        <Sidebarbtn To="/Feed" Title="Feed" Icon={<BsMusicNoteList/>}></Sidebarbtn>
        </div>
        <div>
          <Sidebarbtn To="/" Title="Signout" Icon={<AiOutlineLogout/>} ></Sidebarbtn>

        </div>

    </div>
  )
}
