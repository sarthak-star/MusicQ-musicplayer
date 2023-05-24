import React from "react";
import "./controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

export default function Controls({
  isplaying,
  setisplaying,
  handlenext,
  handleprev,
}) {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className="controls-wrapper flex">
        <div className="action-btn flex" onClick={handleprev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={
            isplaying ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => setisplaying(!isplaying)}
        >
          {isplaying ? <FaPause /> : <IoPlay />}
        </div>
        <div className="action-btn flex" onClick={handlenext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
}