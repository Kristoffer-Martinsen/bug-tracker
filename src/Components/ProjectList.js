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
    const [modalShow, setModalShow] = useState(false); 
    const [description, setDescription] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleAdd() {
        const newProjectList = projectList.concat({name, description, id: uuidv4() });
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
            <Button className="mb-3" variant="primary" onClick={() => setModalShow(true)}>
                Create Project
            </Button>
            <ProjectCreationModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                name = {name}
                description = {description}
                onChange = {handleChange}
                onAdd = {handleAdd}
            />
            <ListGroup as="ul" defaultActiveKey={initialActiveProject}>
                {projectList.map((project) => (
                    <ListGroup.Item 
                        action 
                        href={'#'.concat(project.name)} 
                        key={project.id}
                        >
                            {project.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}


export default ProjectList;