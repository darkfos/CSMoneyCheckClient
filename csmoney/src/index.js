import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";


// Pages
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Set Theme
localStorage.setItem("theme", "primary");


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/docs' element={<App />} />
                <Route path='/blogs' element={<App />} />
                <Route path='/profile' element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);