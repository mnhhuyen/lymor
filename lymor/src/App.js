// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CustomerService from './pages/CustomerService';
import RingProduct from './pages/RingProduct';
import Collections from './pages/Collections'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/customer-service" element={<CustomerService />} />
                <Route path="/product" element={<RingProduct />} />
                <Route path="/collections" element={<Collections />} />
            </Routes>
        </Router>
    );
}

export default App;
