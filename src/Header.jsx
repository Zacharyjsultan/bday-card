import React from "react";
import PUTJ from "./putj.mp3";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <h1>PBOT SHALOM</h1> <audio src={PUTJ} controls className="music" />
    </div>
  );
}
