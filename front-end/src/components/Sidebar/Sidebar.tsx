import React, { useState } from 'react';
import './Sidebar.css';

import { ProfileIcon, PercetageIcon, BackArrowIcon, LogoutIcon } from 'src/assets';
import MenuButton from '../MenuButton/MenuButton';

function Sidebar() {
    const [menuActive, setMenuActive] = useState(false);
    

  return (
    <>
        <MenuButton isMenuActive={menuActive} setIsMenuActive={setMenuActive} />
        <div className={`sidebar-container ${menuActive ? `slideInLeft` : ``} `}>

            

            <div className='sidebar-container--container-box'>
                <img className='back-icon' src={BackArrowIcon.toString()} alt="Back icon" onClick={() =>setMenuActive(!menuActive)} />

                <div className='sidebar-container--profile-box'>
                    <div className='sidebar-container--profile-box--flex'>
                        Perfil

                        <img src={ProfileIcon.toString()} alt="Profile icon" />
                        
                    </div>
                    <div className='divider-line'></div>
                </div>

                <div className='sidebar-container--register-box'>
                    
                    <div className='sidebar-container--register-box-flex'>
                        Cadastrar presença

                        <img src={PercetageIcon.toString()} alt="Percentage icon" />
                        
                    </div>
                    <div className='divider-line'></div>
                </div>

                <div className='sidebar-container--leave-box'>

                    <div className='sidebar-container--leave-box-flex'>
                        Sair

                        <img src={LogoutIcon.toString()} alt="Logout icon" />
                    
                    </div>
                    <div className='divider-line'></div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Sidebar