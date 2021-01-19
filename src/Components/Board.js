import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';

export default function Board() {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>To Do</Card.Title>
                        <Card.Text>test</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>In Progress</Card.Title>
                        <Card.Text>test</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Done</Card.Title>
                        <Card.Text>test</Card.Text>
                    </Card.Body>
                </Card>
                
            </CardGroup>
        </div>
    )
}
