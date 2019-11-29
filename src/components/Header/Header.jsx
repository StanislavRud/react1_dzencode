import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerColums}>
                <img src="./img/logo.png" alt="logo"/>
                <input type="search" name="q" placeholder="Поиск"></input>
                <div className={style.headerTime}>
                    <div id="dateWeekDisplay"></div>
                    <div id="dayOfMounth"></div>
                    <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/9-512.png" alt="clock"/>
                    <div id="timedisplay"></div>
                </div>
            </div>
        </header>
    )
}

function getDate() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let today = date.getDate();

    let nameMounth = new Array('Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек');
    let month = nameMounth[date.getMonth()];
    let year = date.getFullYear();

    let day = new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота");
    let dayOnWeek = day[date.getDay()];

    //По надобности условие ниже повторить с minutes и hours
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById('dayOfMounth').innerHTML = today + ' ' + month + ' ' + year
    document.getElementById('timedisplay').innerHTML = hours + ':' + minutes + ':' + seconds;
    document.getElementById('dateWeekDisplay').innerHTML = dayOnWeek;
}

setInterval(getDate, 0);

export default Header;