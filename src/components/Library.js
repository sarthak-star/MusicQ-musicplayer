import React, { useEffect, useState } from 'react'
import apiclient from '../spotify';
import "./library.css";
import playbutton from "../Assets/play-button.png"
import { useNavigate } from 'react-router-dom';


export default function Library() {
  const [playlists, setplaylists] = useState(null);

  useEffect(() => {
    apiclient.get("me/playlists").then((response) => {
      setplaylists(response.data.items);
      


    });
  }, []);

  const navigate=useNavigate();

  

  const playplaylist=(id)=>{
    navigate("/player", {state:{id:id}});
    
  };


  return (
    <div className='screen-container' >
      <h1 className='library-heading' >Your Playlists</h1>
      <div className="library-body">
        {playlists?.map((playlists) => (
          <div key={playlists.id} className="play-card">
            <div className="empty"></div>
            <img className='card-img' src={playlists.images[0].url} alt="sorry" />
            <div onClick={()=> playplaylist(playlists.id)} className='play-btn' >
              <img src={playbutton} alt="" />
            </div>
            <p className='card-name' >{playlists.name}</p>
            <p className='card-totalsongs' >{playlists.tracks.total} Songs</p>
          </div>
        ))}

      </div>

    </div>
  )
}
