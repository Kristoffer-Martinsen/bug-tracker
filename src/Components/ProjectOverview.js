import React from 'react';
import Backlog from './Backlog';
import Board from './Board';
import Roadmap from './Roadmap';
import {Nav, Tab, Row, Col} from 'react-bootstrap';

function ProjectOverview(props) {
    return (
        <div>
            <h1>{props.projectName}</h1>
            <Tab.Container id="OverviewList" defaultActiveKey="Roadmap">
                <Row>
                    <Col xs={2} className="border-right border-top">
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
                    <Col className="border-top">
                        <Tab.Content>
                            <Tab.Pane eventKey="Roadmap">
                                <Roadmap/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Backlog">
                                <Backlog/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Board">
                                <Board/>
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
