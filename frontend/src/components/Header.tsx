import React from 'react';
import logo from '../styles/assets/imgs/PropiT_Logo_black.png';
import envloveIcon from '../styles/assets/svgs/envlove.svg';
import fireIcon from '../styles/assets/svgs/fire.svg';
import pathIcon from '../styles/assets/svgs/path.svg';

export default function Header() {

  return (
    <header className="flex align-center space-between">
      <div className="right-container flex">
        <div className="property-type-btns">
          <button>מסחרי</button>
          <button>מגורים</button>
        </div>
        <span>מועדפים</span>
        <span>חיפוש</span>
        <span>מחשבון שטחים</span>
        <span>הוספת נכס</span>
        <span>תגמול שותפים</span>
        <span>קבל הצעות אישיות</span>
        <span>
          <img className="icon" alt="fire" src={fireIcon}></img>
          <span>דילים חמים</span>
          <img className="icon" alt="path" src={pathIcon}></img>
        </span>
      </div>
      <div className="left-container flex">
        <span><span>077-998504</span><img className="icon" alt="envlove" src={envloveIcon}></img></span>
        <span className="logo"><img alt="logo" src={logo}></img></span>
      </div>
    </header>
  );
}
