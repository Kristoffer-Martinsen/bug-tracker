import React, { useState }from 'react';
import { v4 as uuidv4} from 'uuid';
import {Button, ListGroup, Form, Row } from 'react-bootstrap';

const initialIssueList = [

];


export default function Backlog() {
    const [issueList, setIssueList] = useState(initialIssueList);
    const [issueName, setIssueName] = useState('');

    function handleAddIssue() {
        const newIssueList = issueList.concat({issueName, id: uuidv4()})
        setIssueList(newIssueList);
        setIssueName('');
    }

    return (
        <div>
            <h1>Backlog</h1>
            <ListGroup>
                {issueList.map((issue => (
                    <ListGroup.Item 
                        action
                        key={issue.id}>
                            {issue.issueName}
                        </ListGroup.Item>
                )))}
            </ListGroup>
            <Row className="ml-1">
                <Button
                    className="mr-2"
                    onClick={handleAddIssue}>
                        Add Issue
                </Button>
                <Form>
                    <Form.Control 
                        type="text"
                        value = {issueName}
                        onChange={(e) => setIssueName(e.target.value)}>
                    </Form.Control>
                </Form>
            </Row>
        </div>
    )
}
