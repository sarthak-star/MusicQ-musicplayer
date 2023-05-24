import React from 'react'
import "./songcard.css"

export default function Songcard(props) {
    
    
    const artists=[];
    props.track?.album?.artists?.forEach((element)=>{
        artists.push(element?.name);
    })

    return (
        <div className='songcard'>
            <div className="songcard-img">
                <img src={props.track?.album?.images?.[1]?.url} alt="Sorry image not available" />
                <div className="img-shadow">
                    <img src={props.track?.album?.images?.[1]?.url} alt=" " />
                </div>


            </div>
            <div className="cardname-container">
            <div className="songcard-name">
                <h1>{props.track?.name}</h1>
                

            </div>
            </div>
            <div className="card-info">
            <h4>~{artists.join(",")}</h4>
            </div>
        </div>
    )
}
