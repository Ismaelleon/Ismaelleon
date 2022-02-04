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
	height: calc(100vh - 64px);
	padding: var(--h4) var(--h2);
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
    flex-direction: row;
	max-width: 1200px;
	margin: auto;

    @media (max-width: 670px) {
		grid-template-columns: 1fr;
		flex-direction: column;
        padding: var(--h5);
    }
`;

const About = styled.div`
	animation: transition 1s forwards;
    display: flex;
    flex-direction: column;

    @media (max-width: 670px) {
		grid-row: 2 / 3;
    }

    @media (max-width: 670px) {
        width: 100%;
    }
`;

const Title = styled.h1`
	font-size: var(--h1);
	letter-spacing: .28rem;
	margin: .5rem 0;

    @media (max-width: 820px) {
		font-size: var(--h2);
        background: #1D2125;
        width: 160px;
    }
`;

const Quote = styled.p`
	font-size: var(--h3);

    @media (max-width: 820px) {
		font-size: var(--h4);
        background: #1D2125;
        display: inline;
        width: 100%;
    }
`;

const Cta = styled.button`
	background: #E7A633;
	color: #fff;
	outline: none;
	border: none;
	display: block;
	font-size: var(--h5);
	font-family: 'Roboto Condensed';
    padding: .28rem var(--h6);
	margin: var(--h6) 0;
	cursor: pointer;
	font-weight: bold;
    animation: transition 1s forwards;
	transition-duration: .5s;

	@media (max-width: 820px) {
		font-size: var(--h6);
	}
`;

const Images = styled.div`
	height: calc(100vh - 64px - var(--h4));
	display: flex;
	justify-content: center;
	align-items: center;

    @media (max-width: 670px) {
        height: 50vh;
		grid-row: 1 / 2;
        right: calc(10%);
        top: -5%;
    }
`;

const ImageStyle = {
	animation: 'transition 1s forwards'
};

export default Home;
