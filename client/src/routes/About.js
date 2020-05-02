import React from 'react';
import styled from 'styled-components';

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

					I started learning programming when I was 11 years old
					with a HTML5 book and now I am a "full-stack" web developer.
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
    overflow-y: hidden;
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
