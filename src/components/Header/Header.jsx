import React from 'react';
import Logo from '../../assets/Logo.svg'

import './Header.css'
const Header = (props) => {
    
    function Drop() {

        let drop = document.querySelector('.drop')
        drop.style.display="grid"
    }
    function Close() {
       let drop = document.querySelector('.drop')
       drop.style.display="none"

    }

    return (  

        <div className="header">
            <div className="container header__container">
            <div className="header__logo">
            <a href=""><img src={Logo} className='logo' alt="" /></a> 
            </div>
            <nav className="header__right">
                <div className="drop">
                <i class="fas fa-coins"></i>
                <i class="fas fa-key"></i>
                <i class="fas fa-users-cog"></i>
                <i class="fas fa-sign-out-alt"></i>
                </div>

                <a href="/"><i class="fas fa-cog text-light" onMouseEnter={Drop} onMouseLeave={Close}></i></a> 
                 <div className="header__login"></div>
                    <p className='header-login__user text-light'>{props.user}</p>
                 <i class="fas fa-user-circle text-light fs-3"></i>
            </nav>
            </div>
        </div>

    );
}
 
export default Header;