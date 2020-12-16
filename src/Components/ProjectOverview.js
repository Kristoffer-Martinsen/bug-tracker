import React from 'react';
import Nav from 'react-bootstrap/Nav';

function ProjectOverview(props) {
    return (
        <div>
            <h1>Project name</h1>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="#project1">Roadmap</Nav.Link>
                <Nav.Link eventKey="link-1">Backlog</Nav.Link>
                <Nav.Link eventKey="link-1">Board</Nav.Link>
                <Nav.Link eventKey="link-2">Code</Nav.Link>
                <Nav.Link eventKey="link-2">Project Settings</Nav.Link>
            </Nav>
        </div>
    )
}

export default ProjectOverview;
