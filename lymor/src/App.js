// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CustomerService from './pages/CustomerService';
import RingProduct from './pages/RingProduct';
import Collections from './pages/Collections'
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Policy from './pages/Policy';
import About from './pages/About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/customer-service" element={<CustomerService />} />
                <Route path="/product" element={<RingProduct />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/policy/*" element={<Policy />} />
            </Routes>
        </Router>
    );
}

export default App;
