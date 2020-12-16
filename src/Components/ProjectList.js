import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import ProjectCreationModal from './ProjectCreationModal';
import { ListGroup } from 'react-bootstrap';

const InitialProjectList = [
    

];


function ProjectList() {
    const [projectList, setProjectList] = useState(InitialProjectList);
    const [name, setName] = useState('');
    const [modalShow, setModalShow] = React.useState(false); 

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
        </div>
    );
}


export default ProjectList;