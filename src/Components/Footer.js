// Footer.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/footer.css";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
function Footer() {
  return (
    <div className='footer'>
     
       
<div>        
    <NavLink to="/home" activeClassName="active"><HomeIcon/></NavLink>
</div>  

<div>
            <NavLink to="/employees" activeClassName="active"><PersonIcon/></NavLink>
        </div>
    </div>
  );
}

export default Footer;
