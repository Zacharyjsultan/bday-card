import React, { useEffect, useRef } from "react";
import PUTJ from "./putj.mp3";
import "./Header.css";

export default function Header() {
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current.play();
  }, []);
  return (
    <div>
      <h1 className="namesss">PBOT's 21!</h1>
      <audio
        ref={audioRef}
        src={PUTJ}
        controls
        className="music"
        onLoad={() => audioRef.current.play()}
      />
    </div>
  );
}
