import React, { useState, useEffect } from 'react';
import '../styles/BuildingPage.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

function BuildingPage() {

    const actualProg = 40;
    const [loadingText, setLoadingText] = useState('.');
    const [percentProg, setPercentProg] = useState(0);

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



    return (
        <div className='buildingBox'>
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
                    <div className='socialLink'>
                        <a href='https://google.com'><FacebookIcon fontSize="large"/></a>
                        <a href='https://google.com'><InstagramIcon fontSize="large"/></a>
                        <a href='https://google.com'><TwitterIcon fontSize="large"/></a>
                        <a href='https://google.com'><LinkedInIcon fontSize="large"/></a>
                        <a href='https://google.com'><EmailIcon fontSize="large"/></a>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default BuildingPage;