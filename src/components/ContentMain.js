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
                <h1>Notre Catalogue</h1>
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