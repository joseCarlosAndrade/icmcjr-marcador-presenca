
import './MenuButton.css';

import { MenuIconSVG } from 'src/assets';

function MenuButton() {
  return (
    <div className='menu-button'>
      <img src={MenuIconSVG.toString()} alt="" />
    </div>
  )

  
}

export default MenuButton;