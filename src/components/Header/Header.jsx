import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <img src="./img/logo.png" alt="logo"/>
                <input type="search" name="q" placeholder="Поиск"></input>
                <div id="dateDisplay"></div>
                <div id="timedisplay"></div>
            </div>
        </header>
    )
}

function getDate()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var today = date.getDate();

    var nameMounth = new Array( 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек');
    var month = nameMounth[date.getMonth()];
    var year = date.getFullYear();

    var day=new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота");
    var dayOnWeek = day[date.getDay()];

    //По надобности условие ниже повторить с minutes и hours
    if(seconds < 10)
    {
        seconds = '0' + seconds;
    }
    document.getElementById('timedisplay').innerHTML = today +' '+ month + ' ' + year + ' '+ hours + ':' + minutes + ':' + seconds;
    document.getElementById('dateDisplay').innerHTML = dayOnWeek;
}
setInterval(getDate, 0);

export default Header;