import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/">Главная страница</Link> | <Link to="/about">О приложении</Link>
        </header>
    )
}

const headerStyle = {
    color: 'black',
    textAlign: 'center',
    padding: '10px'
  }
export default Header;