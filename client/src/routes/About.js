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
	padding: 50px;
	animation: transition 1s forwards;

    @media (max-width: 540px) {
        padding: 20px;
    }
`;

const Title = styled.h1`
	font-size: 34px;
	letter-spacing: 5px;
`;

const Text = styled.p`
	font-size: 24px;
	padding: 10px 0;
    overflow-y: hidden;
`;

export default About;
