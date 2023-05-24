import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import apiclient from '../spotify';
import "./player.css";
import Songcard from "./songcard";
import Queue from "./queue"
import Audioplayer from "./Audioplayer"
import Widgets from './widgets';


export default function Player() {

  const location=useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    if(location.state){
      apiclient.get(`playlists/${location.state.id}/tracks`).then((res)=>{
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0].track);
        
        
        
        

        
      });
      
    }
    
  },[location.state]);

  useEffect(()=>{
    setCurrentTrack(tracks[currentIndex]?.track);
    

  },[currentIndex,tracks])
  
  




  return (
    <div className='screen-container flex'>
      <div className="left-body">
        <Songcard track={currentTrack} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />

      </div>
      <div className="right-body">
        <Audioplayer currentTrack={currentTrack}  currentIndex={currentIndex} total={tracks} setCurrentIndex={setCurrentIndex} />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />

      </div>
    </div>
  )
}
