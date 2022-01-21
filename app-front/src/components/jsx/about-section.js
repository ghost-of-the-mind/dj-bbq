import React from "react";

import squadIMG from '../../assets/steven/squad2.png';

const AboutSection = () => {
    return (
        <section id='about-section'>

            <section className='about-card-grid'>
                
                <section className='about-card-media'>
                    <img className='about-card-img' alt="DJ BBQ's barbeque squad" src={squadIMG} />  
                    <h4 className='center-text'>Licenced to grill with meats and beats</h4>                   
                </section>

                <section className='about-card-list'>  
                    <h2 className='center-text'><small>&#9733; &#9733; &#9733;</small> Meet DJ BBQ <small>&#9733; &#9733; &#9733;</small></h2>
                        <ul>
                            <li className='about-card-accolades'><p>Sharing mouth-wathering recipes with <a href='https://www.youtube.com/channel/UCOiQQjYzRK0XXST5q-fc0tw' rel='noopener noreferrer nofollow' target='_blank'>174K Youtube subscribers</a>.</p></li>
                            <li><p>Author of <a href='https://djbbq.com/collections/books' rel='noopener noreferrer nofollow' target='_blank'>4 cookbooks</a> filled with recipes like <a href='https://www.youtube.com/watch?v=A2QEcqKMCQs' rel='noopener noreferrer nofollow' target='_blank'>The Smashed Burger</a>.</p></li>
                            <li><p>Creator of the <a href='https://www.youtube.com/watch?v=ZIc6XieMGGo' rel='rel=”noopener noreferrer nofollow">' target='_blank'>Death Star cooking method</a>&#8482;.</p></li>
                            <li><p>Annual participant in many festivals like <a href='https://thebigfeastival.com/' rel='noopener noreferrer nofollow' target='_blank'>The Big Festival</a>.</p></li>
                        </ul>
                </section>
            </section>
        </section>
    )
};

export default AboutSection;