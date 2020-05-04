import React, { useState } from 'react';
import styled from 'styled-components';

function AdminPanel () {
    let [title, setTitle] = useState(''),
        [date, setDate] = useState(''),
        [githubURL, setGithubURL] = useState(''),
        [tags, setTags] = useState('');
    let [form, setForm] = useState(false);
    let [option, setOption] = useState('messages');
    let [data, setData] = useState([]);

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
        })
    }

    function getData () {
        console.log(option)
        fetch('http://138.197.68.249:8080/admin/get_data', {
            method: 'POST',
            body: JSON.stringify({
                option: option
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Allow-Control-Allow-Origin': 'http://138.197.68.249:3000'
            }
        }).then(res => res.json())
            .then(res => {
                setData(res)
            })
    }

    return (
        <Container>
            <AdminHeader>
                <AdminTitle>Admin Panel</AdminTitle>
            </AdminHeader>
            <AdminMain>
                <AdminSelect onChange={(e) => {setOption(e.target.value); getData();}}>
                    <AdminOption value="messages">Messages</AdminOption>
                    <AdminOption value="projects">Projects</AdminOption>
                </AdminSelect>
                <Add onClick={() => setForm(true)}>Nuevo</Add>
                <AdminList>
                    {data.map((project, index) => <li>
                            <p>{project.title}</p>
                            <p>{project.date}</p>
                        </li>
                    )}
                </AdminList>
                <AdminModal style={form ? {display: 'block'} : {display: 'none'}}>
                    <ModalTitle>Nuevo Proyecto</ModalTitle>
                    <ModalForm>
                        <AdminInput onChange={e => setTitle(e.target.value)} type="text" placeholder="Título"></AdminInput>
                        <AdminInput onChange={e => setDate(e.target.value)} type="date" placeholder="Fecha"></AdminInput>
                        <AdminInput onChange={e => setGithubURL(e.target.value)} type="text" placeholder="Github URL"></AdminInput>
                        <AdminInput onChange={e => setTags(e.target.value)} type="text" placeholder="Tags" />
                        <SubmitProject onClick={() => {submitProject(); setForm(false)}}>Guardar Proyecto</SubmitProject>
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

const AdminHeader = styled.header`
    width: 100%;
    padding: 15px 20px;
    background: #1D2125;
    box-shadow: rgba(0, 0, 0, .18) 0 1px 5px;
`;

const AdminTitle = styled.p`
    font-size: 24px;
    color: #ffffff;
`;

const AdminMain = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px;
`;

const AdminSelect = styled.select`
    font-size: 20px;
    border: none;
    background: rgb(231,166,51);
    padding: 10px 15px;
    color: #ffffff;
    outline: none;
`;

const AdminOption = styled.option`
    padding: 10px 15px;
`;

const Add = styled.button`
    font-size: 20px;
    padding: 10px 15px;
    color: #ffffff;
    outline: none;
    border: none;
    background: rgb(231, 166, 51);
    margin: 0 20px;
    cursor: pointer;
`;

const AdminList = styled.ul`
    with: 100%;
    min-height: 50vh;
    border: rgb(231,166,51) solid 1px;
    margin: 10px 0;
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

const SubmitProject = styled.button`
    font-size: 20px;
    color: #ffffff;
    background: rgb(231, 166, 51);
    border: none;
    padding: 5px;
    border-radius: 3px;
    font-family: 'Roboto Condensed';
`;

export default AdminPanel;
