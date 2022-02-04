import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

// Import routes
import Home from './routes/Home';
import Work from './routes/Work';
import About from './routes/About';
import Contact from './routes/Contact';
import AdminAuth from './routes/AdminAuth';
import AdminPanel from './routes/AdminPanel';


function App () {
    let [auth, setAuth] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/admin_panel') {
            fetch('http://ismaelleon.duckdns.org/admin/auth', {
                method: 'POST',
                body: JSON.stringify({
                    id: document.cookie.slice(3)
                }),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Allow-Control-Allow-Origin': 'http://ismaelleon.duckdns.org'
                }
            }).then(res => res.json())
            .then(res => {
                setAuth(res.auth)
            })
        }
    }, [])

	return (
		<Router>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/work">
				<Work />
			</Route>
			<Route exact path="/about">
				<About />
			</Route>
			<Route exact path="/contact">
				<Contact />
			</Route>
		    <Route exact path="/admin">
                <AdminAuth />
            </Route>
            <Route exact path="/admin_panel">
                {auth ? <AdminPanel /> : <AdminError>No tienes permisos</AdminError>}
            </Route>
        </Router>
	);
}

const AdminError = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    color: #ffffff;
`;

export default App;
