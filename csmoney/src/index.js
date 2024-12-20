import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";
import { Provider } from 'react-redux';


// Pages
import App from './App';
import DocsPage from './pages/DocsPage';
import ReviewsPage from './pages/ReviewsPage';
import BlogsPage from './pages/BlogsPage';
import store from "./store/storeRedux";
const root = ReactDOM.createRoot(document.getElementById('root'));

// Set Theme
localStorage.setItem("theme", "primary");


root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/docs' element={<DocsPage />} />
                    <Route path='/blogs' element={<BlogsPage />} />
                    <Route path='/reviews' element={<ReviewsPage />} />
                    <Route path='/profile' element={<ReviewsPage />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);