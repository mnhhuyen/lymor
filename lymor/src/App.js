// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CustomerService from './pages/CustomerService';
import RingProduct from './pages/RingProduct';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/customer-service" element={<CustomerService />} />
                <Route path="/product" element={<RingProduct />} />
            </Routes>
        </Router>
    );
}

export default App;
