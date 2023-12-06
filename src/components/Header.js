import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {

    const [active, setActive] = useState(0);

    return (
        <div className='HeaderBox'>
            <img src="/primaryNoBg.png" width="300px" className='headerLogo' alt='logo' />
            <div className='navLinkBox'>
                <div className={active === 0 ? 'link active' : 'link normal'}>
                    <a href='#' onClick={() => setActive(0)}>Accueil</a>
                    <div className='underLine'></div>
                </div>
                <div className={active === 1 ? 'link active' : 'link normal'}>
                    <a href='#' onClick={() => setActive(1)}>Réservation</a>
                    <div className='underLine'></div>
                </div>
                <div className={active === 2 ? 'link active' : 'link normal'}>
                    <a href='#' onClick={() => setActive(2)}>Assistance</a>
                    <div className='underLine'></div>
                </div>
                <div className={active === 3 ? 'link active' : 'link normal'}>
                    <a href='#' onClick={() => setActive(3)}>Contact</a>
                    <div className='underLine'></div>
                </div>
                <a className="btn" href='https://reonAxis.fr'>
                    <div className='btnHover'>Se connecter</div>
                    <div className='btnNormal'>Se connecter</div>
                </a>
            </div>
        </div>
    );
}

export default Header;