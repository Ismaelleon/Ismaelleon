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
			<Link style={LogoStyle} to="/"><Logo>Ismael León</Logo></Link>
	        <MenuOpen className={ menu ? 'open' : '' } onClick={toggleMenu}>
				<span></span>
				<span></span>
			</MenuOpen>
        <NavLinks style={
            menu === true ? {left: '0%'} : {left: '-100%'}
        }>
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
	padding: var(--h5) var(--h2);
	display: flex;
	justify-content: space-between;
	align-items: center;

    @media (max-width: 540px) {
        padding: var(--h5);
    }
`;

const Logo = styled.p`
	color: #fff;
	font-size: var(--h3);
	font-weight: bold;
`;

const LogoStyle = {
	textDecoration: 'none',
	color: '#fff',
	transform: 'skew(-.100rad)',
	display: 'block'
};

const LinkStyle = {
	textDecoration: 'none',
	color: '#fff',
	padding: '.28rem var(--h6)',
	transform: 'skew(-.100rad)',
	display: 'block'
};

const SelectedLinkStyle = {
	textDecoration: 'none',
	color: '#fff',
	padding: '.28rem var(--h6)',
	background: '#E7A633',
	transform: 'skew(-.100rad)',
	display: 'block'
};

const NavLinks = styled.ul`
	display: flex;
	list-style: none;

    @media (max-width: 670px) {
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: -100%;
        background: #1D2125;
        z-index: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition-duration: .3s;
    }
`;

const NavLink = styled.li`
	color: #fff;
	font-size: var(--h6);

    @media (max-width: 670px) {
        font-size: 24px;
        margin: .5rem 0;
        min-width: 250px;
		text-align: center;
    }
`;

const MenuOpen = styled.span`
    display: none;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	margin-left: auto;
	height: 27px;
	right: 0;
	top: 0;
	margin: var(--h5) var(--h2);
	z-index: 2;

	& span {
		display: block;
		position: relative;
		width: 30px;
		height: 2px;
		background-color: #fff;
		transition-duration: .3s;
		transform-origin: center;
	}

	& span:nth-child(1) {
		transform: translateY(-5px);
	}

	& span:nth-child(2) {
		transform: translateY(5px);
	}

	&.open {
		& span: nth-child(1) {
			transform: translateY(0px) rotate(45deg);
		}
		
		& span: nth-child(2) {
			transform: translateY(0px) rotate(-45deg);
		}
	}

    @media (max-width: 670px) {
        display: flex;
    }
`;

export default Navbar;
