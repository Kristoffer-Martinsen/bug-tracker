import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import ProjectList from './Components/ProjectList';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App">
      <header className="App-header"/>
      <Header/>
        <Container fluid>
          <Col xs={2}>
            <ProjectList/>
          </Col>
          <Col>
            
          </Col>
        </Container>
    </div>
  );
}

export default App;
