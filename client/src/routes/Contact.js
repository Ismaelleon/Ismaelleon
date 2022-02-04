import React, { useState } from 'react';
import styled from 'styled-components';

// Import Components
import Navbar from './components/Navbar';

function Contact () {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');

    function sendMessage (e) {
        e.preventDefault()
        fetch('http://138.197.68.249:8080/message', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            }),
            credentials: 'include',
            headers: {
                'Allow-Control-Allow-Origin': 'http://138.197.68.249:3000',
                'Content-Type': 'application/json'
            }
        })
    }

	return (
		<div>
			<Navbar />
			<MainContent>
				<Content>
					<Form>
						<Title>Let's talk</Title>
						<Input type="text" placeholder="Your Name" onChange={e => setName(e.target.value)}></Input>
						<Input type="email" placeholder="Your E-mail" onChange={e => setEmail(e.target.value)}></Input>
						<Message placeholder="Your Message" onChange={e => setMessage(e.target.value)}></Message>
						<SendMessage onClick={sendMessage}>Send!</SendMessage>
					</Form>
				</Content>
				<Content>
					<Social>
						<Title>Social</Title>
							<ul style={{listStyle: 'none'}}>
								<ListItem><a style={linkStyle} href="https://twitter.com/IsmaelLen9">Twitter</a></ListItem>
								<ListItem><a style={linkStyle} href="https://github.com/Ismaelleon">GitHub</a></ListItem>
							</ul>
					</Social>
				</Content>
			</MainContent>
		</div>
	);
}

const MainContent = styled.main`
	width: 100%;
	display: flex;
    overflow-y: hidden;
	height: calc(100vh - 64px);
	align-items: center;
	justify-content: center;
	max-width: 1200px;
	margin: auto;

    @media (max-width: 820px) {
        flex-direction: column;
    }
`;

const Title = styled.h1`
	font-size: var(--h1);
	letter-spacing: .28rem;
`;

const Content = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: transition 1s forwards;

    @media (max-width: 820px) {
        width: 100%;
        height: auto;
        padding: var(--h6);
    }
`;

const Social = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 80%;
`;

const ListItem = styled.li`
	font-size: var(--h5);
	margin: .28rem 0;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 80%;
`;

const Input = styled.input`
	border: none;
	background: none;
	color: #fff;
	font-size: var(--h5);
	padding: .28rem 0;
	border-bottom: #E7A633 solid 2px;
	margin: .5rem 0;
    font-family: 'Roboto Condensed';
`;

const Message = styled.textarea`
	border: none;
	background: none;
	color: #fff;
	font-size: var(--h5);
	padding: .28rem 0;
    font-family: 'Roboto Condensed';
	border-bottom: #E7A633 solid 2px;
	margin: .5rem 0;
`;

const SendMessage = styled.button`
	border: none;
	background: #E7A633;
	padding: .5rem var(--h6);
	color: #fff;
	font-size: var(--h5);
	margin: .5rem 0;
    font-family: 'Roboto Condensed';
	font-weight: bold;
	transform: skew(-.100rad) !important;
`;

const linkStyle = {
	textDecoration: 'none',
	color: '#E7A633'
};

export default Contact;
