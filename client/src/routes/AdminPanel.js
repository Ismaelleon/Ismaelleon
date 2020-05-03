import React from 'react';
import styled from 'styled-components';

function AdminPanel () {
    return (
        <Container>
            <AdminHeader>
                <AdminTitle>Admin Panel</AdminTitle>
            </AdminHeader>
            <AdminMain>
                <AdminSelect>
                    <AdminOption value="messages">Messages</AdminOption>
                    <AdminOption value="projects">Projects</AdminOption>
                </AdminSelect>
                <AdminList>

                </AdminList>
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

const AdminList = styled.ul`
    with: 100%;
    min-height: 50vh;
    border: rgb(231,166,51) solid 1px;
    margin: 10px 0;
`;

export default AdminPanel;
