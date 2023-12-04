import React from 'react';
import '../styles/Benefits.css';

function Benefits() {
    return (
        <div className='contentBox'>
            <div className='section1Box'>
                <h1>Oubliez les contraintes et ne gardez que la performance</h1>
                {/*Chaque carte est clickable et quand hover on voit l'action "en savoir plus" ?*/}
                <div className='cardBox'>
                    <div className='card'>
                        <div>
                            <img src='/productive.png' />
                            <h2>Matériel dernière génération</h2>
                            <p>explication + btn en savoir plus en bas à gauche de la carte (vers partie catalogue)</p>
                        </div>
                        <a>En savoir plus</a>
                    </div>
                    <div className='separator'></div>
                    <div className='card'>
                        <div>
                            <img src='/commitment.png' />
                            <h2>Réservation et gestion simplifier</h2>
                            <p>explication + btn en savoir plus en bas à gauche de la carte (vers partie réservation)</p>
                        </div>

                        <a>En savoir plus</a>
                    </div>
                    <div className='separator'></div>
                    <div className='card'>
                        <div>
                            <img src='/productive.png' />
                            <h2>Problème matériel prise ne charge</h2>
                            <p>explication + btn en savoir plus en bas à gauche de la carte (vers partie gestion incident/parc)</p>
                        </div>
                        <a>En savoir plus</a>
                    </div>
                </div>
            </div>


            {/*Changer de thème fond noir ?*/}
            <div></div>

            <p>juste mettre une section catalogue en dessous et une section témoignage et Réservation, gestion location, facturaton</p>
            <p>Quand en ligne faire menu depliant à gauche pour accéder à ces location / facturation / mon compte ...</p>

            di
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ligula quam. Proin in condimentum nibh. Ut dictum dapibus lacus, vitae congue orci laoreet ut. Quisque tincidunt, ante in mollis ultricies, justo ligula dictum erat, et tristique neque diam eu ex. Aliquam vitae urna in turpis pretium fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis id sollicitudin arcu, sit amet tincidunt justo. Integer varius bibendum orci sit amet egestas.
                Praesent ut ante in tellus vehicula ultricies. Mauris ultrices, enim ut rutrum iaculis, justo tellus interdum libero, id suscipit nisl mauris sit amet dui. Sed dui quam, aliquam sit amet mauris non, laoreet facilisis lacus. Aliquam commodo est et tortor bibendum mollis. Cras ac bibendum nulla, aliquam pharetra arcu. Vivamus mollis elit sit amet consectetur suscipit. Suspendisse fermentum, tellus ut vulputate suscipit, nisl justo tincidunt sapien, eu blandit urna diam sit amet ipsum. Vestibulum dapibus purus ac malesuada pretium. Proin in diam magna. </p>
            <p>Ajouter 3 petit cadre display horizontal avec des icon comme dans mail</p>
            <h1>S2: Réservation en Quelques Clics: De la Sélection à la Livraison</h1>
            <p>Ajouter image frise étape de la réservation</p>
            <h1>S3: Gestion Simplifiée: Support, Renouvellement et Plus Encore</h1>
        </div>


    );
}

export default Benefits;