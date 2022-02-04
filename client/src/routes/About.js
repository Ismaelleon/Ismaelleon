import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';

function About () {
	return (
		<div>
			<Navbar />
			<MainContent>
				<Title>About Me</Title>
				<Text>
                    Hi, my name is Ismael León, I'm a programmer from Uruguay,
                    I started coding at 11 years old, before that I've made many
                    games and little projects with <a href="https://scratch.mit.edu"
                    style={linkStyle}>Scratch</a>. I try to code something every day,
                    you can see my portfolio or follow me on <a href="https://twitter.com/IsmaelLen9"
                    style={linkStyle}>Twitter</a> to know more about what I'm doing.
                </Text>
			</MainContent>
		</div>
	);
}

const linkStyle = {
    color: 'rgb(231, 166, 51)',
    textDecoration: 'none'
};

const MainContent = styled.main`
	width: 100%;
	padding: var(--h4) var(--h2);
	animation: transition 1s forwards;
	height: calc(100vh - 64px);
	max-width: 1200px;
	margin: auto;

    @media (max-width: 670px) {
        padding: var(--h5);
    }
`;

const Title = styled.h1`
	font-size: var(--h2);
	letter-spacing: .28rem;

	@media (max-width: 820px) {
		font-size: var(--h3);
	}
`;

const Text = styled.p`
	font-size: var(--h3);
	padding: .5rem 0;
    overflow-y: hidden;

	@media (max-width: 820px) {
		font-size: var(--h4);
	}
`;

export default About;
