import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectOverview(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <Tab.Container id="OverviewList" defaultActiveKey="Roadmap">
                <Row>
                    <Col>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="Roadmap">Roadmap</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Backlog">Backlog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Board">Board</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Code">Code</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="ProjectSettings">Project Settings</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="Roadmap">
                                <h1>Roadmap</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Backlog">
                                <h1>Backlog</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Board">
                                <h1>Board</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Code">
                                <h1>Code</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="ProjectSettings">
                                <h1>Project Settings</h1>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default ProjectOverview;
