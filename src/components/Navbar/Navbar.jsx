import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={style.nav}>
            <img src="https://kwork.ru/pics/t3/85/109231-1.jpg" alt="avatar"/>
            <div>
                <NavLink to='/prihods' activeClassName={style.activeLink}>ПРИХОД</NavLink>
            </div>
            <div>
                <NavLink to='/groups' activeClassName={style.activeLink}>ГРУППЫ</NavLink>
            </div>
            <div>
                <NavLink to='/products' activeClassName={style.activeLink}>ПРОДУКТЫ</NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={style.activeLink}>ПОЛЬЗОВАТЕЛИ</NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={style.activeLink}>НАСТРОЙКИ</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;