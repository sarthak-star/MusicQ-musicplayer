import React,{useState,useRef,useEffect} from 'react'
import "./audioplayer.css"
import Progresscircle from './progresscircle'
import Waveanimation from "./waveanimation"
import Controls from "./controls"

export default function Audioplayer(props) {
  const [isplaying, setisplaying] = useState(false);
  const [trackprogress, settrackprogress] = useState(0);
  var audioSrc = props.total?.[props.currentIndex]?.track.preview_url;
  const audioRef = useRef(new Audio(props.total[0]?.track.preview_url));
  
  const intervalRef = useRef();

  const isReady = useRef(false);
  const {duration}=audioRef.current;
  console.log(duration);
  const currentpercentage=duration? (trackprogress / duration) * 100 : 0;
  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        settrackprogress(audioRef.current.currentTime);
      }
    }, [1]);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isplaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isplaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isplaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    settrackprogress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setisplaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [props.currentIndex,audioSrc]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);



  
  
  const handleNext = () => {
    if (props.currentIndex < props.total.length - 1) {
      props.setCurrentIndex(props.currentIndex + 1);
    } else props.setCurrentIndex(4);
    
    console.log(props.total.length);
  };

  const handlePrev = () => {
    if (props.currentIndex - 1 < 0) props.setCurrentIndex(props.total.length - 1);
    else props.setCurrentIndex(props.currentIndex - 1);
  };
  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };
  return (
    <div className="audioplayer-body">
        <div className="audioplayer-left-body">
          <p className="song-title">{props.currentTrack?.name}</p>
          <div className="player-left-bottom">
            <div className="song-duration">
              <p className="duration">0:{addZero(Math.round(trackprogress))}</p>
              <Waveanimation isplaying={isplaying} />
              <p className="duration">0:30</p>

            </div>
            <Controls 
              isplaying={isplaying}
              setisplaying={setisplaying}
              handlenext={handleNext}
              handleprev={handlePrev}
              total={props.total}

            
            
            />

          </div>
            


        </div>
        <div className="audioplayer-right-body">
          <Progresscircle 
            percentage={currentpercentage}
            isplaying={isplaying}
            image={props.currentTrack?.album?.images?.[0].url}
            size={300}
            color="rgba(0,212,255,1)"


          
          />
        </div>
    </div>
  )
}
