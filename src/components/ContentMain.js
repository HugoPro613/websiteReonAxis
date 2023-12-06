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
                            <p>explication + btn en savoir plus en bas à gauche de la carte (vers partie catalogue)</p>
                        </div>
                        <a href='#catalogue'>En savoir plus</a>
                    </div>
                    <div className='separator'></div>
                    <div className='card'>
                        <div>
                            <img src='/commitment.png' />
                            <h2>Réservation et gestion des locations sans prise tête</h2>
                            <p>explication + btn en savoir plus en bas à gauche de la carte (vers partie réservation)</p>
                        </div>

                        <a href='#reservation'>En savoir plus</a>
                    </div>
                    <div className='separator'></div>
                    <div className='card'>
                        <div>
                            <img src='/warning.png' />
                            <h2>Réparation/Remplacement du matériel en cas de problème</h2>
                            <p>explication + btn en savoir plus en bas à gauche de la carte (vers partie gestion incident/parc)</p>
                        </div>
                        <a href='#gestion'>En savoir plus</a>
                    </div>
                </div>
            </div>

            <div id='catalogue' className='section2Box'>
                <h1>Notre Catalogue :</h1>
                <div className='catalogueBox'>
                    <div className='catalogueItem'>
                        <img src='/hp-workstation-z4-g4.jpg' />
                        <div className='separator' />
                        <div className='detail'>
                            <h3>HP Z4 G4 Tour</h3>
                            <p className='prix'>120€  - 200€  TTC *</p>
                            <ul className='carac'>
                                <li><b>Système d'exploitation |</b> Windows 10 Pro</li>
                                <li><b>Processeur |</b> Intel® Xeon® W 2245</li>
                                <li><b>Mémoire |</b> 32 Go RAM</li>
                                <li><b>Stockage |</b> 1 To Disque SSD</li>
                                <li><b>Carte graphique |</b> NVIDIA® Quadro® RTX™ A2000 (6 Go)</li>
                            </ul>
                        </div>
                        <a href='#'>En savoir plus</a>
                    </div>
                    <div className='catalogueItem'>
                        <img src='/hp-workstation-z4-g4.jpg' />
                        <div className='separator' />
                        <div>
                            <h3>HP Zbook Power G10 15,6"</h3>
                            <p>Description du produit</p>
                        </div>
                    </div>
                    <div className='catalogueItem'>
                        <img src='/hp-workstation-z4-g4.jpg' />
                        <div className='separator' />
                        <div>
                            <h3>Écran HP Z24q G3 QHD</h3>
                            <p>Description du produit</p>
                        </div>
                    </div>
                    <div className='catalogueItem'>
                        <img src='/hp-workstation-z4-g4.jpg' />
                        <div className='separator' />
                        <div>
                            <h3>Écran HP Z27u G3 QHD</h3>
                            <p>Description du produit</p>
                        </div>
                    </div>
                    <div className='catalogueItem last'>
                        <p>Réservez maintenant(mettre cta)</p>
                    </div>
                </div>
                <p>mettre les images des produit avec leur nom sur image et quand on click/hover on voit detail avec la fourchette de prix qui dépends de la durée de loc(mettre une note pour ça)</p>
                <p>mettre un call action qui ammène à la page de réservation</p>
            </div>
            {/*Changer de thème fond noir pour section 3 et 4 ?*/}
            <div id='reservation' className='section3Box'>
                <h1>Réservation en Quelques Clics: De la Sélection à la Livraison</h1>
                <p>Ajouter image frise étape de la réservation</p>
            </div>
            <div id='gestion' className='section4Box'>
                <h1>Gestion Simplifiée: Support, Renouvellement et Plus Encore</h1>
            </div>

            <p>juste mettre une section catalogue en dessous et une section témoignage et Réservation, gestion location, facturaton</p>
            <p>Quand en ligne faire menu depliant à gauche pour accéder à ces location / facturation / mon compte ...</p>
        </div>


    );
}

export default ContentMain;