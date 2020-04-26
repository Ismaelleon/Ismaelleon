import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Import Components
import Navbar from './components/Navbar';


function Work () {
    let [work, setWork] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/work', {
            method: 'POST'
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
    height: calc(100vh - 78px);
    padding: 50px;
    display: flex;
    flex-direction: column;

    @media (max-width: 680px) {
        padding: 50px 20px;
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
    padding: 10px;
    transition-duration: .3s;
    background: #1D2125;
    display: flex;
    flex-direction: row;
    border-bottom: rgba(0, 0, 0, 0.18) solid 2px;
    align-items: center;
    margin-bottom: 5px;
`;

const ProjectName = styled.h2`
    font-size: 24px;
    color: rgb(231, 166, 51);
`;

const ProjectDate = styled.p`
    font-size: 18px;
`;

const ProjectLink = styled.a`
    font-size: 18px;
    margin-left: auto;
    padding: 5px 10px;
    background: rgb(231, 166, 51);
    transform: skew(-.1rad);
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
`;

export default Work;
