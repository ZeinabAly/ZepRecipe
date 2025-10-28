import React from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faCarrot, faClock, faUtensils} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="homePage">
            <Navbar />
           
           <div className="banniere">
              <div className="cover">
                <h1>Décrouvez toutes vos recettes en un seul lieu</h1>
                
                <Link to="/recipes">
                    <button to="/recipes">Commencer</button>
                </Link>
              </div>
           </div>

           {/* QUI SOMMES-NOUS */}
           <div className="about">
                <div className="left">
                    <h1>who are we ?</h1>
                    <p className="texte">At our core, we are food enthusiasts who believe in the power of sharing a great meal. Our journey began with a simple idea: to bring people closer to the joy of cooking by offering a platform that celebrates food in all its forms. Whether it's a treasured family recipe passed down through generations or a modern twist on an international dish, we believe that cooking is more than just preparing food—it's a way to connect, to create, and to celebrate life.
                    Through our app, we’ve built a community where everyone, from passionate home cooks to budding chefs, can find inspiration, share their own creations, and discover new flavors. Welcome to a world where food brings us together!
                    </p>
                </div>
                <div className="gallery-img">
                    <img src="./img/img1.webp" alt="image-gallery1" />
                    <img src="./img/img2.jpg" alt="image-gallery2" />
                    <img src="./img/img3.jpg" alt="image-gallery3" />
                    <img src="./img/img4.jpg" alt="image-gallery4" />
                    <img src="./img/img5.jpg" alt="image-gallery5" />
                    <img src="./img/img6.jpg" alt="image-gallery6" />
                    <img src="./img/img1.webp" alt="image-gallery7" />
                    <img src="./img/img2.jpg" alt="image-gallery8" />
                    <img src="./img/img3.jpg" alt="image-gallery9" />
                </div>
           </div>

           {/* <div className="skills">
                <div className="left">
                    <h1>Improve your skills</h1>
                    <p className="texte">
                        Dans le cadre de mon développement professionnel au sein de [nom de l'entreprise], j'ai eu l'opportunité de suivre une formation complète sur JavaScript et React. Cette formation, offerte par l'entreprise, avait pour but de renforcer mes compétences en développement web, notamment sur des technologies modernes telles que JavaScript et le framework React, devenus incontournables dans l'industrie.
                        Ce rapport présente un compte-rendu détaillé des différentes étapes de la formation, des projets réalisés, ainsi qu'une évaluation personnelle de l'apprentissage.
                    </p>
                </div>
                <div className="right">
                    <ul>
                        <li>Learn new recipes</li>
                        <li>Experiment with food</li>
                        <li>Write your own recipes</li>
                        <li>Knowledge nutrition facts</li>
                        <li>Get cooking tips</li>
                        <li>Get ranked</li>
                    </ul>
                </div>
           </div> */}

           <div className="section2">
                <div>
                    <h1>What we offer</h1>
                    <p className="texte">
                        Our app offers a wide selection of recipes and tips to guide you through all your culinary adventures. Whether you're passionate about baking, looking for new ideas for everyday meals, or curious to explore a variety of dishes, we've got everything you need
                    </p>
                </div>
                <div className="grid">
                    <div className="section2-img">
                        <div className="cover"><p>Cuisine</p></div>
                    </div>
                    <div className="section2-img">
                        <div className="cover"><p>Pastry</p></div>
                    </div>
                    <div className="section2-img">
                        <div className="cover"><p>variety</p></div>
                    </div>
                </div>
           </div>

           <div className="section3">
                <div className="left">
                    <div><img src="./img/img5.jpg" alt="section3-img1" /></div>
                    <div><img src="./img/img3.jpg" alt="section3-img2" /></div>
                    <div><img src="./img/img6.jpg" alt="section3-img3" /></div>
                    <div><img src="./img/img4.jpg" alt="section3-img4" /></div>
                </div>
                <div className="right">
                    <h1>Find the best Recipes</h1>
                    <p className="texte">
                        Looking for tried-and-true recipes that never fail to impress? Look no further. Our curated selection of the best recipes is a collection of user favorites, top-rated dishes, and editor’s picks, all guaranteed to deliver outstanding results. These are the recipes that have been loved by thousands, crafted by home cooks and professionals alike, and shared across tables for years.
                        From comfort food classics to innovative culinary masterpieces, these recipes have been tested, reviewed, and perfected to ensure they meet the highest standards. Whether you’re craving a quick, satisfying meal after a long day or planning an unforgettable dinner party, our ‘Best Recipes’ section has what you need
                    </p>
                </div>
           </div>

           <div className="section4">
                <div className="cover">
                    <div className="col col1">
                        <FontAwesomeIcon icon={faCarrot} className="icon" />
                        <h2>Healthy Eating Made Easy</h2>
                        <p>Each recipe is crafted to promote balance, using wholesome ingredients and simple preparation methods that fit into your daily routine</p>
                    </div>
                    <div className="col col2">
                        <FontAwesomeIcon icon={faClock} className="icon" />
                        <h2>Clock</h2>
                        <p>Cooking at home has never been more efficient. With our app, you can quickly find recipes that match the ingredients you already have</p>
                    </div>
                    <div className="col col3">
                        <FontAwesomeIcon icon={faUtensils} className="icon" />
                        <h2>Chef Hat</h2>
                        <p>From mastering basic skills to trying out gourmet recipes, you'll continuously grow as a cook with every meal you prepare</p>
                    </div>
                </div>
           </div>

           <div className="section5">
                <div className="left">
                    <div className="border"></div>
                    <img src="./img/img4.jpg" alt="img-section5" />
                </div>
                <div className="right">
                    <h1>Discover</h1>
                    <p className="texte">
                    Embark on a journey through flavors and cuisines! Our platform is your gateway to a diverse range of recipes, each crafted to inspire creativity in the kitchen. From quick weeknight dinners to elaborate weekend feasts, from healthy meals to indulgent desserts—there’s something for everyone.
                    Discover mouth-watering recipes that are tailored to suit your needs, whether you’re cooking for a family, experimenting with new ingredients, or preparing a romantic dinner for two. Our intuitive search tools allow you to filter by cuisine, cooking time, dietary preferences, and more, making it easy to find exactly what you're craving
                    </p>
                </div>
           </div>

           <footer>
                <div className="logo">ZedF<span>oo</span>d</div>
                <p className="texte">
                    Dans le cadre de mon développement professionnel au sein de , j'ai eu l'opportunité de suivre une formation complète sur JavaScript et React
                </p>
                <p className="copy">Copyright &copy; Tous droits réservés</p>
           </footer>
        </div>
    );
};

export default Home;