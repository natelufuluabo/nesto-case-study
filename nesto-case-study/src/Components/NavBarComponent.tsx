import React, { useState } from "react";
import nestoLogoEn from '../Images/logo_nesto_en.png';
import nestoLogoFr from '../Images/logo_nesto_fr.png';

const NavBar = () => {
    const [language, setLanguage] = useState({
        english : true,
        french : false
    })
    return (
        <nav className='navbar'>
            <img className='logo' src={language.english ? nestoLogoEn : nestoLogoFr}/>
        </nav>
    )
}

export default NavBar;