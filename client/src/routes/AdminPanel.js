import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Import Components
import Navbar from './components/Navbar';

function AdminPanel () {
    let [title, setTitle] = useState(''),
        [date, setDate] = useState(''),
        [githubURL, setGithubURL] = useState(''),
        [tags, setTags] = useState('');
    let [form, setForm] = useState(false);
    let [projects, setProjects] = useState([]);
    let [messages, setMessages] = useState([]);

    useEffect(() => {
        // Update Messages and Projects
        getMessages()
        getProjects()
    }, [])

    function getProjects () {
        fetch('http://138.197.68.249:8080/admin/get_projects', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Allow-Control-Allow-Origin': 'http://138.197.68.249:3000'
            }
        }).then(res => res.json())
        .then(res => {
            setProjects(res.projects)
        })
    }

    function getMessages () {
        fetch('http://138.197.68.249:8080/admin/get_messages', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Allow-Control-Allow-Origin': 'http://138.197.68.249:3000'
            }
        }).then(res => res.json())
            .then(res => {
                setMessages(res.messages)
            })
    }

    function submitProject () {
        fetch('http://138.197.68.249:8080/admin/new_project', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                date: date.slice(8) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4),
                githubURL: githubURL,
                tags: tags
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Allow-Control-Allow-Origin': 'http://138.197.68.249:3000'
            }
        }).then(() => {
            getProjects()
        })
    }

    function deleteProject (projectTitle) {
        fetch('http://138.197.68.249:8080/admin/delete_project', {
            method: 'POST',
            body: JSON.stringify({
                title: projectTitle
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Allow-Control-Allow-Origin': 'http://183.197.68.249:3000'
            }
        }).then(res => res.json())
            .then(res => {
                setProjects(res.projects)
            })
    }

    function deleteMessage (message) {
         fetch('http://138.197.68.249:8080/admin/delete_message', {
            method: 'POST',
            body: JSON.stringify({
                message: message
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Allow-Control-Allow-Origin': 'http://183.197.68.249:3000'
            }
        }).then(res => res.json())
            .then(res => {
                setMessages(res.messages)
            })
    }

    return (
        <Container>
            <Navbar />
            <AdminMain>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Title>Projects</Title>
                    <AdminButton onClick={() => setForm(true)}>New Project</AdminButton>
                </div>
                <AdminList>
                    {projects.map((project, index) =>
                        <AdminItem key={index}>
                            <div>
                                <p style={{fontSize: '20px'}}>{project.title}</p>
                                <p style={{fontSize: '18px'}}>{project.date}</p>
                            </div>
                            <DeleteItem onClick={() => deleteProject(project.title)}>Borrar</DeleteItem>
                        </AdminItem>
                    )}
                </AdminList>
                <Title>Messages</Title>
                <AdminList>
                    {messages.map((message, index) =>
                        <AdminItem key={index}>
                            <div>
                                <p style={{fontSize: '20px'}}>{message.name}</p>
                                <p style={{fontSize: '18px'}}>{message.message}</p>
                            </div>
                            <DeleteItem onClick={() => deleteMessage(message.message)}>Borrar</DeleteItem>
                        </AdminItem>
                    )}
                </AdminList>
                <AdminModal style={form ? {display: 'block'} : {display: 'none'}}>
                    <ModalTitle>New Project</ModalTitle>
                    <ModalForm>
                        <AdminInput onChange={e => setTitle(e.target.value)} type="text" placeholder="Título"></AdminInput>
                        <AdminInput onChange={e => setDate(e.target.value)} type="date" placeholder="Fecha"></AdminInput>
                        <AdminInput onChange={e => setGithubURL(e.target.value)} type="text" placeholder="Github URL"></AdminInput>
                        <AdminInput onChange={e => setTags(e.target.value)} type="text" placeholder="Tags" />
                        <AdminButton onClick={() => {submitProject(); setForm(false)}}>Save Project</AdminButton>
                        <AdminButton onClick={() => {setForm(false)}}>Cancel</AdminButton>
                    </ModalForm>
                </AdminModal>
            </AdminMain>
       </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

const Title = styled.h2`
    font-size: 34px;
    margin: 10px 0;
`;

const AdminMain = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px;

    @media (max-width: 640px) {
        width: 100%;
    }
`;

const AdminButton = styled.button`
    font-size: 20px;
    padding: 10px 10px;
    color: #ffffff;
    border-radius: 3px;
    font-family: 'Roboto Condensed';
    font-weight: bold;
    outline: none;
    border: none;
    background: rgb(231, 166, 51);
    cursor: pointer;
`;

const AdminList = styled.ul`
    with: 100%;
    min-height: 50vh;
    border: rgb(231,166,51) solid 1px;
    margin: 10px 0;
    list-style: none;
`;

const AdminItem = styled.li`
    padding: 5px 10px;
    border-bottom: rgba(231, 166, 51, .18) solid 1px;
    display: flex;
    align-items: center;
`;

const DeleteItem = styled.span`
    color: rgb(255, 0, 0);
    margin-left: auto;
    font-size: 20px;
    cursor: pointer;
`;

const AdminModal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: #1D2125;
    padding: 20px 10%;
    display: flex;
    flex-direction: column;

    @media (max-width: 650px) {
        padding: 20px 5%;
    }
`;

const ModalTitle = styled.h2`
    font-size: 34px;
    color: #ffffff;
`;

const ModalForm = styled.div`
    width: 100%;
    margin: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;

    @media (max-width: 650px) {
        grid-template-columns: 100%;
    }
`;

const AdminInput = styled.input`
    font-size: 20px;
    border: #ffffff solid 1px;
    border-radius: 3px;
    background: none;
    padding: 5px;
    margin: 5px 0;
    color: #ffffff;
    font-family: 'Roboto Condensed';
`;

export default AdminPanel;
