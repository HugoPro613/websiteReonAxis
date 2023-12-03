import React from 'react';
import '../styles/Hero.css';
import { Parallax } from 'react-parallax';

function Hero() {
    return (
        <div className='heroBox'>
            <div className='heroBoxTop'>
                <div className='heroTitle'>
                    <h1>Passer au niveau supérieur grâce à la location.</h1>
                    <h2>La location au meilleur prix pour votre matériel spécialisé dans la modélisation/création 3D avec assurances et assistance incluses.</h2>
                </div>

                <div className='heroImg'>
                    <Parallax  className='parallax' bgImage='/heroImg.jpg' strength={100}></Parallax>
                </div>
            </div>
            <img className='transitionTop' src='/patternBot.png' alt='transition' />
            <div className='heroBoxBot'>

            </div>
        </div>
    )
}

export default Hero;