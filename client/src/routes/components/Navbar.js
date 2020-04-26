import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Navbar () {
	let location = useLocation();
    let [menu, setMenu] = useState(false);

    function toggleMenu () {
        menu === true ? setMenu(false) : setMenu(true);
    }

	return (
		<Nav>
			<Link style={LinkStyle} to="/"><Logo>Ismael León</Logo></Link>
	        <MenuOpen onClick={toggleMenu}>Menu</MenuOpen>
        <NavLinks style={
            menu === true ? {left: '0%'} : {left: '-100%'}
        }>
                <MenuExit onClick={toggleMenu}>Exit</MenuExit>
				<NavLink className="link"><Link style={
					location.pathname === '/' ?
					SelectedLinkStyle :
					LinkStyle
				} to="/">Welcome</Link></NavLink>
				<NavLink className="link"><Link style={
					location.pathname === '/work' ?
					SelectedLinkStyle :
					LinkStyle
				}to="/work">Work</Link></NavLink>
				<NavLink className="link"><Link style={
					location.pathname === '/about' ?
					SelectedLinkStyle :
					LinkStyle
				}to="/about">About</Link></NavLink>
				<NavLink className="link"><Link style={
					location.pathname === '/contact' ?
					SelectedLinkStyle :
					LinkStyle
				}  to="/contact">Contact</Link></NavLink>
			</NavLinks>
		</Nav>
	);
}

const Nav = styled.div `
	width: 100%;
	padding: 20px 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.p`
	color: #ffffff;
	font-size: 24px;
`;

const LinkStyle = {
	textDecoration: 'none',
	color: '#ffffff',
	padding: '5px 15px',
	transform: 'skew(-.100rad)',
	display: 'block'
};

const SelectedLinkStyle = {
	textDecoration: 'none',
	color: '#ffffff',
	padding: '5px 15px',
	background: '#E7A633',
	transform: 'skew(-.100rad)',
	display: 'block'
};

const NavLinks = styled.ul`
	display: flex;
	list-style: none;

    @media (max-width: 820px) {
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: -100%;
        background: #1D2125;
        z-index: 4;
        padding: 50px 20px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition-duration: .3s;
    }
`;

const NavLink = styled.li`
	color: #ffffff;
	font-size: 18px;

    @media (max-width: 820px) {
        font-size: 24px;
        margin: 10px 0;
        min-width: 250px;
    }
`;

const MenuOpen = styled.span`
    display: none;

    @media (max-width: 820px) {
        display: block;
        margin-left: auto;
        transform: skew(-.1rad);
        font-size: 24px;
    }
`;

const MenuExit = styled.span`
    display: none;

    @media (max-width: 820px) {
        position: absolute;
        top: 20px;
        right: 20px;
        display: block;
        font-size: 24px;
        transform: skew(-.1rad);
    }
`;

export default Navbar;
