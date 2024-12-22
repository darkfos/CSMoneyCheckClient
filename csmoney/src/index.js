import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";
import store from "./store/storeRedux";
import { Provider } from 'react-redux';
import ProtectedRouter from './store/protectedRouter';


// Pages
import App from './App';
import DocsPage from './pages/DocsPage';
import ReviewsPage from './pages/ReviewsPage';
import BlogsPage from './pages/BlogsPage';
import ItemsPage from './pages/ItemsPage';
import ProfilePage from './pages/ProfilePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Set Theme
localStorage.setItem("theme", "primary");
localStorage.setItem("page", "main");


root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/docs' element={<DocsPage />} />
                    <Route path='/blogs' element={<BlogsPage />} />
                    <Route path='/reviews' element={<ReviewsPage />} />
                    <Route path='/profile' element={
                        <ProtectedRouter>
                            <ProfilePage />
                        </ProtectedRouter>
                    } />
                    <Route path='/favourites' element={
                        <ProtectedRouter>
                            <ProfilePage />
                        </ProtectedRouter>
                    } />
                    <Route path="/items" element={<ItemsPage />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);