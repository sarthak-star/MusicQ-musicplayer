import React from 'react'
import "./progresscircle.css"
import vinylimg from "../Assets/vinyl-img.png";



const Circle = ({ color, percentage, size, strokewidth }) => {
    const radius = size ? (size / 2) - 10 : 0;
    const circum = (2 * Math.PI * radius) - 20;
    const strokepct = ((Math.round(percentage ? (100 - percentage) : 0) * circum) / 100);
    

    return (
        <circle
            r={radius}
            cx="50%"
            cy="50%"
            fill="transparent"
            stroke={strokepct !== circum ? color : ""}
            strokeWidth={strokewidth}
            strokeDasharray={circum}
            strokeDashoffset={percentage ? strokepct : 0}
            strokeLinecap="round"
        ></circle>
    )
};

export default function progresscircle(props) {
    return (
        <div className="progress-circle">
            <svg width={props.size} height={props.size}>
            <g>
                    <Circle strokewidth={"0.4rem"} color="#3B4F73" size={props.size-15} />
                    <Circle strokewidth={"0.6rem"} color="url(#linear)" percentage={props.percentage} size={props.size-15} />
                </g>
                <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="aliceblue" />
                        <stop offset="25%" stopColor="aliceblue" />
                        
                        <stop offset="100%" stopColor="rgba(0,212,255,1)" />
                    </linearGradient>
                    <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={props.size / 2 - 10} fill="#FFFFFF" />
          </clipPath>

                   

                </defs>
                <image className={props.isplaying ? 'active' : ""} x={30} y={30} width={2*(props.size/2 - 30)} height={2*(props.size/2 - 30)} href={vinylimg} clipPath='url(#mycircle' />
                

                
            </svg>
        </div>

    )
}
