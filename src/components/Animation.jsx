import React from 'react';
import phone from "../icons/phone.png";
import screenOne from "../icons/screen1.jpg";

const Animation =() => {

    // const animation = () => {
    //     if ()
    //   }
      
    //   setTimeout(sayHi, 1000);
    let a = document.getElementsByClassName("Animation-screen");
    console.log(a.namedItem);
    return (
        <div className="Animation">
        <div className="Animation-photos">
           <img src={phone} alt="phone" className="Animation-phone" />
           <img src={screenOne} alt="screen" className="Animation-screen" />
        </div>
           <h2 className="Animation-text">Присоединяйся <br/> и наслаждайся!</h2>
        </div>
    );
};

export default Animation;