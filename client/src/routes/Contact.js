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

    @media (max-width: 820px) {
        flex-direction: column;
    }
`;

const Title = styled.h1`
	font-size: 34px;
	letter-spacing: 5px;
`;

const Content = styled.div`
	width: 50%;
	height: calc(100vh - 78px);
	display: flex;
	justify-content: center;
	align-items: center;
	animation: transition 1s forwards;

    @media (max-width: 820px) {
        width: 100%;
        height: auto;
        padding: 50px 0;
    }
`;

const Social = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 80%;
`;

const ListItem = styled.li`
	font-size: 20px;
	margin: 5px 0;
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
	color: #ffffff;
	font-size: 20px;
	padding: 5px 0;
	border-bottom: #E7A633 solid 2px;
	margin: 10px 0;
    font-family: 'Roboto Condensed';
`;

const Message = styled.textarea`
	border: none;
	background: none;
	color: #ffffff;
	font-size: 20px;
	padding: 5px 0;
    font-family: 'Roboto Condensed';
	border-bottom: #E7A633 solid 2px;
	margin: 10px 0;
`;

const SendMessage = styled.button`
	border: none;
	background: #E7A633;
	padding: 10px 15px;
	color: #ffffff;
	font-size: 20px;
	margin: 10px 0;
    font-family: 'Roboto Condensed';
	font-weight: bold;
	transform: skew(-.100rad) !important;
`;

const linkStyle = {
	textDecoration: 'none',
	color: '#E7A633'
};

export default Contact;
