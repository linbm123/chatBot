import React from 'react';

import  "../css/header.css";

interface HeaderProps {
    username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => (
        <header>
            <h1>Chatbot {username}</h1>
        </header>
);
export default Header;