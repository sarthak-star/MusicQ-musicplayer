import React from 'react'
import "./queue.css"

export default function queue(props) {
  function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    
  
    return mins + ':' + secs;
  }
  
  const trackdata=Array.from(props.tracks);
  console.log(trackdata);
  

  
  
  return (
    <div className='queue-card' >
      <div className="queue-heading">
      <h1>Up Next</h1>
      </div>
      <div className="queue-list">
        {trackdata.map((track,index)=>{
          if(index>0 && track?.track?.name!=""){
            return  (
              <div  onClick={()=>props.setCurrentIndex(index)} className='queue-item' key={track?.track?.id}>
                <img src={track?.track?.album?.images?.[2]?.url} alt="" />
                <p className='queue-name' >{track?.track?.name}</p>
                <p>{msToTime(track?.track?.duration_ms)}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
