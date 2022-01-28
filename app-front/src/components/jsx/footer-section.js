import React from "react";
import { Link } from "react-router-dom";

import instaIcon from '../../assets/ux/social-icon/instagram.png';
import youtubeIcon from '../../assets/ux/social-icon/youtube.png';
import facebookIcon from '../../assets/ux/social-icon/facebook.png';
import twitterIcon  from '../../assets/ux/social-icon/twitter.png';

const FooterSection = () => {
    return ( 
        <footer className='footer-grid'>

        <h2 className='footer-title'><small>&#9733; &#9733; &#9733;</small> Hungry for more? <small>&#9733; &#9733; &#9733;</small></h2>

        <aside className="prototype-text center-text">
            <p>The option to subscribe to this newsletter is functional. Yet, since this website is only meant as a prototype, the newsletter form has been disabled for the time being.  </p>
        </aside>

            <section className='newsletter-section'>
                <h4>Sign Up to our Newsletter!</h4>
                <form action="/newsletter" method="POST">
                    <input type='text' placeholder="Your Email" name="mail" required />
                    <input className='trap-input' type='text' name='_gotcha' />
                    <button className='newsletter-sign-up-button' type='submit'>
                        Sign Up!
                    </button>
                </form>
            </section>
            
            <h4>Or Follow DJ BBQ on Social Media...</h4>
            <section className='footer-social-icons'>
                <a href='https://www.instagram.com/djbbq/' rel='noopener noreferrer nofollow' target='_blank'>
                    <img src={instaIcon} alt="A link to DJ BBQ's Instagram profile" />
                </a>
                <a href='https://www.youtube.com/channel/UCOiQQjYzRK0XXST5q-fc0tw' rel='noopener noreferrer nofollow' target='_blank'>
                    <img src={youtubeIcon} alt="A link to DJ BBQ's Youtube channel" />
                </a>
                <a href='https://www.facebook.com/DJ-BBQ-110959825668127/' rel='noopener noreferrer nofollow' target='_blank'>
                    <img src={facebookIcon} alt="A link to DJ BBQ's Facebook profile" />
                </a>
                
                <a href='https://twitter.com/dj_bbq' rel='noopener noreferrer nofollow' target='_blank'>
                    <img src={twitterIcon} alt="A link to DJ BBQ's Twitter profile" />
                </a>
            </section>

            <section className='site-map-section'>
                <h4>Site Map</h4>

                <ul className='site-map'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>

                        <li>
                            <Link to="/store">Store</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/reset">Password Reset</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </ul>
            </section>
            
            <section className='footer-copy'>
                <p className='center-text'>© Copyright 2021 – present, DJ BBQ. Website designed by <a href='https://github.com/ghost-of-the-mind' rel='noopener noreferrer nofollow' target='_blank'>Bruno Lauris</a>.</p>
            </section>
            
        </footer>
    )
};

export default FooterSection;