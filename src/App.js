import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import ProjectOverview from './Components/ProjectOverview.js';
import ProjectDetails from './Components/ProjectDetails.js';
import ProjectList from './Components/ProjectList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        <Container fluid>
          <Row>
            <Col xs={1}>
              <ProjectList/>
            </Col>
            <Col xs={2}>
              <ProjectOverview/>
            </Col>
            <Col xs={"auto"}>
              <ProjectDetails/>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
