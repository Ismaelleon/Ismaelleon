import React, { useState } from 'react';
import styled from 'styled-components';

function AdminAuth (props) {
    let [password, setPassword] = useState('');

    function submitAuth () {
        fetch('http://138.197.68.249:8080/admin/', {
            method: 'POST',
            body: JSON.stringify({
                password: password
            }),
            credentials: 'include',
            headers: {
                'Allow-Control-Allow-Origin': 'http://138.197.68.249:3000',
                'Content-Type': 'application/json'
            }
        })
    }

    return(
        <Container>
            <AdminForm>
                <FormTitle>Admin Panel</FormTitle>
                <PasswordInput type="password" onChange={e => setPassword(e.target.value)} />
                <SubmitForm onClick={submitAuth}>Ingresar</SubmitForm>
            </AdminForm>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AdminForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: rgb(231, 166, 51) solid 1px;
    padding: 50px;
    transform: skew(-.100rad) !important;
    max-width: 90%;
`;

const FormTitle = styled.p`
    font-size: 34px;
    color: #ffffff;
    font-family: 'Roboto Condensed';
    font-weight: bold;
`;

const PasswordInput = styled.input`
    font-size: 20px;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: #E7A633 solid 2px;
    color: #ffffff;
    margin: 10px 0;
    min-width: 230px;
`;

const SubmitForm = styled.button`
    outline: none;
    background: rgb(231, 166, 51);
    color: #ffffff;
    font-size: 20px;
    padding: 10px 15px;
    border: none;
    width: 100%;
    cursor: pointer;
    transform: skew(-.100rad) !important;
    font-weight: bold;
    font-family: 'Roboto Condensed';
    min-width: 230px;
`;


export default AdminAuth;
