import React from 'react';
import '../styles/ContentMain.css';

function ContentMain() {
    return (
        <div className='contentBox'>
            <div className='separator' />
            <div className='section1Box'>
                <h1>Oubliez les contraintes et ne gardez que la performance</h1>
                <div className='cardBox'>
                    <div className='card'>
                        <div>
                            <img src='/productive.png' />
                            <h2>Productivité booster avec notre matériel dernière génération</h2>
                            <p>Loremor in vitae libero. Pellentesque sit amet sestique lectus scelerisque. Praesent ut rhoncus dolor. Pellentesque iaculis, augue at tincidunt pulvinar, diam nulla accumsan orci, et tempus purus nunc venenatis nulla. Sed ut lacus a nulla convallis tincidunt vitae ut nunc.  && explication + btn en savoir plus en bas à gauche de la carte (vers partie catalogue)</p>
                        </div>
                    </div>
                    <div className='separator'></div>
                    <div className='card'>
                        <div>
                            <img src='/commitment.png' />
                            <h2>Réservation et gestion des locations sans prise tête</h2>
                            <p>Lorem ipsum dolor siuspor in vitae libero. Pellenesuada nibh scelerisque. Praesent ut rhoncus dolor. Pellentesque iaculis, augue at tincidunt pulvinar, diam nulla accumsan orci, et tempus purus nunc venenatis nulla. Sed ut lacus a nulla convallis tincidunt vitae ut nunc.  &&  explication + btn en savoir plus en bas à gauche de la carte (vers partie réservation)</p>
                        </div>
                    </div>
                    <div className='separator'></div>
                    <div className='card'>
                        <div>
                            <img src='/warning.png' />
                            <h2>Réparation/Remplacement du matériel en cas de problème</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitgue at tincidunt pulvinar, diam nulla accumsan orci, et tempus purus nunc venenatis nulla. Sed ut lacus a nulla convallis tincidunt vitae ut nunc.  &&  explication + btn en savoir plus en bas à gauche de la carte (vers partie gestion incident/parc)</p>
                        </div>
                    </div>
                </div>
                <a className='ctaBtn' href='#'>Réservez-maintenant</a>
            </div>
            {/*Changer de thème fond noir pour section 3 et 4 ?*/}
            <div className='section2Box'>
                <h1>Réservation en Quelques Clics: De la Sélection à la Livraison</h1>
                <p>Ajouter image frise étape de la réservation</p>
            </div>
            <div className='section3Box'>
                <h1>Gestion Simplifiée: Support, Renouvellement et Plus Encore</h1>
            </div>

            <p>juste mettre une section catalogue en dessous et une section témoignage et Réservation, gestion location, facturaton</p>
            <p>Quand en ligne faire menu depliant à gauche pour accéder à ces location / facturation / mon compte ...</p>
        </div>


    );
}

export default ContentMain;