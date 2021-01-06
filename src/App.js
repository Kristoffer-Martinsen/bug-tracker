import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import ProjectList from './Components/ProjectList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <ProjectList/>
      </header>
    </div>
  );
}

export default App;
