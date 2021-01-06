import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import ProjectCreationModal from './ProjectCreationModal';
import ProjectOverview from './ProjectOverview';
import { ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

    return (
        <div className="ProjectList">
            <h1>USER</h1>
            <Container>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Create Project
                        </Button>
                        <ProjectCreationModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            name = {name}
                            onChange = {handleChange}
                            onAdd = {handleAdd}
                        />
                        <ListGroup as="ul">
                            {projectList.map((project) => (
                                <ListGroup.Item key={project.id}>{project.name}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col>
                        <ProjectOverview />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default ProjectList;