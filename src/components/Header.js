import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>GreenMall</h1>
            <ul>
                <li><NavLink to="/" className={({isActive})=>isActive ? "okay" : ""}>메인페이지</NavLink></li>
                <li><NavLink to="/product">상품입니다.</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;