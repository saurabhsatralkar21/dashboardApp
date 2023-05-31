import React, { useContext } from 'react'
import "./navbar.scss"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
        </div>
        <div className="items">
          <div className="item" onClick={()=>dispatch({type:"TOGGLE"})}>
            <DarkModeOutlinedIcon className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar