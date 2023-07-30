import { Suspense } from "react";
import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom"; 
import css from './SharedLayout.module.css';


export const SharedLayout = () => {
    return (
        <div>
            <header className={css.layout__header}>
                <nav className={css.layout__nav}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                </nav>
            </header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );    
}