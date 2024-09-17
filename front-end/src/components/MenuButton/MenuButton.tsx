
import './MenuButton.css';

import { MenuIconSVG } from 'src/assets';

interface MenuButtonProp {
  isMenuActive : boolean
  setIsMenuActive : React.Dispatch<React.SetStateAction<boolean>>
}

function MenuButton(prop : MenuButtonProp) {
  function toggleMenu() {
    prop.setIsMenuActive(!prop.isMenuActive)
  }

  return (
    <div onClick={ () => toggleMenu()} className='menu-button'>
      <img src={MenuIconSVG.toString()} alt="" />
    </div>
  )

  
}

export default MenuButton;