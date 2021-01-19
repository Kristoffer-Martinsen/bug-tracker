import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Card, CardDeck} from 'react-bootstrap';

const todoItems = [

];

const inProgressItems = [

];

const doneItems = [

];


export default function Board() {

    const [todoList, setTodoList] = useState(todoItems);
    const [todoName, setTodoname] = useState('');
    const [inProgressList, setInProgressList] = useState(inProgressItems);
    const [inProgressName, setInProgressName] = useState('');
    const [doneList, setDoneItems] = useState(doneItems);
    const [doneName, setDoneName] = useState('');

    function handleAddTodoItem() {
        const newTodoList = todoList.concat({todoName, id: uuidv4})
        setTodoList(newTodoList);
    }

    return (
        <div>
            <CardDeck>
                <Card >
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
            </CardDeck>
        </div>
    )
}
