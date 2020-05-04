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
					Hello, my name is Ismael León, I'm 16 years old
					and I am from Uruguay <span role="img" aria-label="jsx-ally/accessible-emoji">🇺🇾</span><br /><br />

					I started learning programming maybe at the age of 7 years old
                    with Scratch, a software for programming with blocks, after years
                    I became very good at it, making little games and having fun in the
                    process. In high school, making scratch projects was (how we say in
                    my country) "una papa".<br /><br />

                    At the age of 11, my father gave me an HTML book (yeah, I know the meme),
                    I learned a lot, I was impressed of how easy was it to "run" a basic web
                    with a few lines of code. After a lot of learning I started with CSS,
                    "designing" horrible websites, but in the end ... learning. What's next?
                    yes! Javascript, It wasn't hard to learn, but I did have a lot of bad
                    code practices, over time I did correct them, writting a better code
                    while I was learning new features of the language.<br /><br />

                    I could keep talking about what I've learnt, but this would last an eternity,
                    you can see <Link to="/work" style={{color: 'rgb(231, 166, 51)'}}>my projects</Link> to know more about what I do.

					I'm interested in learning more about programming, so I try
					to be always updated about programming and technology in general.
				</Text>
			</MainContent>
		</div>
	);
}

const MainContent = styled.main`
	width: 100%;
	padding: 20px 30px;
	animation: transition 1s forwards;
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

const TechSVG = styled.svg`
    width: 50px;
    height: 50px;
`;

export default About;
