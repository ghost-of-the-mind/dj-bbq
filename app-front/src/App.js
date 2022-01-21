import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, } from "react-router";

import customProxy from "./components/logic/fetch-config.js";

import NavSection from './components/jsx/nav-section.js';
import FooterSection from './components/jsx/footer-section.js';

import HomePage from './components/pages/home-page.js';
import ContactPage from './components/pages/contact-page.js';
import StorePage from './components/pages/stripe/store-page.js';
import CartPage from './components/pages/stripe/cart-page.js';

import CheckoutSuccessPage from './components/pages/stripe/checkout-success-page.js';
import CheckoutCancelPage from './components/pages/stripe/checkout-cancel-page.js';

import LoginPage from "./components/pages/userfront/login-page.js";
import PasswordResetPage from "./components/pages/userfront/password-reset-page.js";
import DashboardPage from './components/pages/userfront/dashboard-page.js';

import './css/styles.css';
import './css/fonts.css';

import './css/fonts/TTF/NorthwestTextured.ttf';
import './css/fonts/WEB/NorthwestTextured.woff';
import './css/fonts/WEB/NorthwestTextured.woff2';

import ScrollToTop from "./components/utils/to-top-button.js";
import RouteToTop from "./components/utils/to-top-routing.js";
import "./components/utils/scrolling-navbar.js";

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `${customProxy}/products/display`;
                const response = await fetch(url);
                const json = await response.json();

                setProducts(json);
                
            } catch(error) {
                //console.error(error);
                alert("Product displaying:" + error);
            }
        };

        fetchData();

    }, []); // Determine swhen to re-use useEffect, if this changes.

  const onAdd = (price) => {
      const exsist = cart.find(x => x.product.id === price.product.id);

      if(exsist) {
        setCart(cart.map((x) => 
          x.product.id === price.product.id ? { ...exsist, qty: exsist.qty + 1 } : x)
        )
      } else {
        setCart([...cart, { ...price, qty: 1 }])
      }
  };

  const onRemove = (price) => {
      const exsist = cart.find( x => x.product.id === price.product.id);

      if(exsist.qty === 1) {
        setCart(cart.filter(x => x.product.id !== price.product.id))
      } else {
        setCart(cart.map((x) => 
          x.product.id === price.product.id ? { ...exsist, qty: exsist.qty - 1 } : x)
        )
      }
  };

  return (
      <section className="App">
            <BrowserRouter>
                <NavSection countCartItems={cart.length} />
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/contacts" element={<ContactPage /> } />
                        <Route exact path="/store" element={<StorePage products={products} cart={cart} onAdd={onAdd} />} />
                        <Route exact path="/cart" element={<CartPage cart={cart} onAdd={onAdd} onRemove={onRemove} />} />
                        <Route exact path="/cart/success" element={<CheckoutSuccessPage />} />
                        <Route exact path="/cart/cancel" element={<CheckoutCancelPage />} />
                        <Route exact path="/login" element={<LoginPage />} />
                        <Route exact path="/reset" element={<PasswordResetPage /> } />
                        <Route exact path="/dashboard" element={<DashboardPage /> } />
                    </Routes>
                <FooterSection />
                    <ScrollToTop />
                    <RouteToTop />
            </BrowserRouter>
      </section>
  );
}

export default App;
