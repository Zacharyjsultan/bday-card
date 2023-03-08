import React from "react";

export default function Card() {
  return (
    <div className="cardd">
      <div className="birthdayCard">
        <div className="cardFront">
          <h3 className="happy">FELIZ CUMPLEANOS TALI!</h3>
          <div className="balloons">
            <div className="balloonOne" />
            <div className="balloonTwo" />
            <div className="balloonThree" />
            <div className="balloonFour" />
          </div>
        </div>
        <div className="cardInside">
          <h2 className="back">HAPPY BDAY VIEJA!</h2>
          <p>Talia,</p>
          <p className="writing">
            I'm extremely proud of who you are becoming and everything you want
            to accomplish. I always got ur back and want you to know that you
            are capable of doing anything you want in this fucked up world and
            that you have many people who are here to support you along the way.
            Be honest with yourself and others about what you want and expect
            and I am sure you will craft your heaven here on earth, on foenem's
            grave.
          </p>
          <p className="name">Zach Sultan</p>
        </div>
      </div>
    </div>
  );
}
