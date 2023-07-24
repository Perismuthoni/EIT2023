import React from 'react';
import '../css/header.css';
import companyLogo from "../images/RujwascoLogo.png";




function Header() {
    return (

    <div className="header">
        <img src={companyLogo} alt="Company Logo"  />
        <hr className="header-line"></hr>
    </div>



    )
}

export default Header;
