import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from './image.jpg';

// Import Components
import Navbar from './components/Navbar';

function Home () {
	return(
		<div>
			<Navbar />
			<MainContent>
				<About>
					<Title>Welcome</Title>
					<Quote>
		                I'm Ismael León, I make nice web applications
                        for people who want to take their business or
                        projects to the next level.
					</Quote>
					<Link style={{transform: 'skew(-.1rad)', textDecoration: 'none', display: 'inline-block'}} to="/work"><Cta>See My Work</Cta></Link>
				</About>
				<Images>
					<img src={Image} alt="Ismael León" className="image" style={ImageStyle} draggable="false" />
				</Images>
			</MainContent>
		</div>
	);
}

const MainContent = styled.main `
	width: 100%;
	height: calc(100vh - 78px);
	padding: 50px;
	display: flex;
	align-items: center;
    flex-direction: row;

    @media (max-width: 920px) {
        flex-direction: column;
    }

    @media (max-width: 560px) {
        padding: 50px 20px;
    }
`;

const About = styled.div`
	width: 40%;
	animation: transition 1s forwards;
    display: flex;
    flex-direction: column;

    @media (max-width: 920px) {
        width: 100%;
    }

    @media (max-width: 560px) {
        width: 100%;
    }
`;

const Title = styled.h1`
	font-size: 34px;
	letter-spacing: 5px;
	margin: 10px 0;

    @media (max-width: 820px) {
        background: #1D2125;
        width: 160px;
    }
`;

const Quote = styled.p`
	font-size: 24px;

    @media (max-width: 820px) {
        background: #1D2125;
        display: inline;
        width: 100%;
    }
`;

const Cta = styled.button`
	background: #E7A633;
	color: #ffffff;
	outline: none;
	border: none;
	display: block;
	font-size: 20px;
	font-family: 'Roboto Condensed';
    padding: 5px 15px;
	margin: 15px 0;
	cursor: pointer;
	font-weight: bold;
    animation: transition 1s forwards;
	transition-duration: .5s;
`;

const Images = styled.div`
	width: 60%;
	height: calc(100vh - 78px);
	display: flex;
	justify-content: center;
	align-items: center;

    @media (max-width: 920px) {
        width: 100%;
        height: 50vh;
    }

    @media (max-width: 560px) {
        right: calc(10%);
        top: -5%;
    }
`;

const ImageStyle = {
	animation: 'transition 1s forwards'
};

export default Home;
