import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Button, ListGroup, Container, Row, Col} from 'react-bootstrap';
import ProjectCreationModal from './ProjectCreationModal';
import ProjectOverview from './ProjectOverview';


const InitialProjectList = [
    

];


function ProjectList() {
    const [projectList, setProjectList] = useState(InitialProjectList);
    const [name, setName] = useState('');
    const [modalShow, setModalShow] = useState(false); 

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleAdd() {
        const newProjectList = projectList.concat({name, id: uuidv4() });
        setProjectList(newProjectList);
        setName('');
        setModalShow(false);
    }

    function initialActiveProject() {
        let activeProject = '';
        if (!InitialProjectList.length) {
            activeProject = '#';
        } else {
             activeProject = '#'.concat(InitialProjectList[0].name);
        }
        return activeProject;
    }

    return (
        <div className="ProjectList">
            <h1>USER</h1>
            <Container fluid>
                <Row>
                    <Col xs={2}>
                        <Button variant="primary" className="my-2" onClick={() => setModalShow(true)}>
                            Create Project
                        </Button>
                        <ProjectCreationModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            name = {name}
                            onChange = {handleChange}
                            onAdd = {handleAdd}
                        />
                        <ListGroup as="ul" defaultActiveKey={initialActiveProject}>
                            {projectList.map((project) => (
                                <ListGroup.Item 
                                action
                                key={project.id}
                                href={'#'.concat(project.name)}>
                                    {project.name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col>
                        <ProjectOverview projectName = {"#"}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default ProjectList;