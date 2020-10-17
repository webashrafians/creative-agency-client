import './Header.css';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import MainHeader from '../MainHeader/MainHeader';

const Header = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
            <MainHeader></MainHeader>
        </div>
    );
};
export default Header;