import React from "react";
import { NavLink } from 'react-router-dom';

const NavSection = (props) => {

    const { countCartItems } = props;

    return (

        // When adding a new route/link, remember to add the same link to App.js
        <nav>
            <ul className='nav-bar-grid'>
                
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                </li>

                <li>
                    <NavLink to="/store">Store</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart {countCartItems ? <span class='cart-badge'>{countCartItems}</span> : null}</NavLink>
                </li>
            </ul>
        </nav>

    )
};

export default NavSection;