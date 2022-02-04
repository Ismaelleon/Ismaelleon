import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Import Components
import Navbar from './components/Navbar';


function Work () {
    let [work, setWork] = useState([]);

    useEffect(() => {
        fetch('http://ismaelleon.duckdns.org/work', {
            method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				'Allow-Control-Allow-Origin': 'http://ismaelleon.duckdns.org'
			}
        }).then(res => res.json())
        .then(res => {
            setWork(res)
        })
    }, [])

    return (
		<div>
			<Navbar />
            <MainContent>
                <Projects>
                    {work.map((project, index) =>
                        <Project key={index}>
                            <div>
                                <ProjectName>{project.title}</ProjectName>
                                <ProjectDate>{project.date}</ProjectDate>
                            </div>
                            <ProjectLink href={project.github}>See More</ProjectLink>
                        </Project>
                    )}
                </Projects>
            </MainContent>
        </div>
	);
}

const MainContent = styled.main`
    width: 100%;
    height: calc(100vh - 64px);
	padding: var(--h4) var(--h2);
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
	max-width: 1200px;
	margin: auto;

    @media (max-width: 670px) {
		padding: var(--h5);
    }
`;

const Projects = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    animation: transition 1s forwards;
`;

const Project = styled.div`
    width: 100%;
    padding: .5rem;
    transition-duration: .3s;
    background: #1D2125;
    display: flex;
    flex-direction: row;
    border-bottom: rgba(0, 0, 0, 0.18) solid 2px;
    align-items: center;
    margin-bottom: .28rem;
`;

const ProjectName = styled.h2`
    font-size: var(--h3);
    color: rgb(231, 166, 51);

	@media (max-width: 820px) {
		font-size: var(--h4);
	}
`;

const ProjectDate = styled.p`
    font-size: var(--h6);
`;

const ProjectLink = styled.a`
    font-size: var(--h6);
    margin-left: auto;
    padding: .28rem .5rem;
    background: rgb(231, 166, 51);
    transform: skew(-.1rad);
    text-decoration: none;
    color: #fff;
    font-weight: bold;
`;

export default Work;
