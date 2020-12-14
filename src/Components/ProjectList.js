import React from 'react'
import Nav from 'react-bootstrap/Nav';

function ProjectList() {
    return (
        <div className="ProjectList">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="#project1">Project 1</Nav.Link>
                <Nav.Link eventKey="link-1">Project 2</Nav.Link>
                <Nav.Link eventKey="link-2">Project 3</Nav.Link>
            </Nav>
        </div>
    )
}

export default ProjectList;