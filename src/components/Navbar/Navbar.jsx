import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={style.nav}>
            <img src="https://kwork.ru/pics/t3/85/109231-1.jpg" alt="avatar"/>
            <div>
                <NavLink to='/prihods'>ПРИХОД</NavLink>
            </div>
            <div>
                <NavLink to='/groups'>ГРУППЫ</NavLink>
            </div>
            <div>
                <NavLink to='/products'>ПРОДУКТЫ</NavLink>
            </div>
            <div>
                <NavLink to='/users'>ПОЛЬЗОВАТЕЛИ</NavLink>
            </div>
            <div>
                <NavLink to='/settings'>НАСТРОЙКИ</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;