import React, { useState, useEffect } from 'react';
import '../styles/BuildingPage.css';
import EmailIcon from '@mui/icons-material/Email';

function BuildingPage() {

    const actualProg = 40;
    const [loadingText, setLoadingText] = useState('.');
    const [percentProg, setPercentProg] = useState(0);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const increaseProgress = () => {
            setPercentProg(prev => {
                if (prev < actualProg) {
                    return prev + 1;
                }
                clearInterval(intervalId);
                return prev;
            });
        };
        const intervalId = setInterval(increaseProgress, 50); // Ajuster le délai pour contrôler la vitesse d'animation
        return () => clearInterval(intervalId); // Nettoyage de l'intervalle
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingText(prevText => {
                if (prevText.length < 3) {
                    return prevText + '.';
                }
                return '.';
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const divStyle = {
        height: `${windowHeight}px`,
    };

    return (
        <div className='buildingBox' style={divStyle}>
            <div className='background'></div>
            <div className='contentBox'>
                <div className='topBox'>
                    <div />
                    <p>ReonAxis</p>
                    <div />
                </div>
                <div className='midBox'>
                    <p className='text'>Construction<br /> en cours</p>
                </div>
                <div className='botBox'>
                    <div className='progressBar'>
                        <p>Progression {loadingText}</p>
                        <div className='emptyBar'>
                            <div className='fullBar' style={{ width: percentProg + '%' }}>
                                <p>{percentProg}%</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact'>
                        <EmailIcon fontSize="large" />
                        <p>Contact : 
                            <a href="mailto:contact@reonAxis.fr">contact@reonAxis.fr</a>
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default BuildingPage;