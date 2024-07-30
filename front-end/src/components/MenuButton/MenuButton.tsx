import React from 'react';
import './MenuButton.css';

import { MenuIconSVG } from 'src/assets';

function MenuButton() {
  return (
    <div className='menu-button'>
      <img src={MenuIconSVG.toString()} alt="" />
    </div>
  )
  // return (
  //   <button className="menu-button">
  //     <div className="bar"></div>
  //     <div className="bar"></div>
  //     <div className="bar"></div>
  //   </button>
  // );
}

export default MenuButton;