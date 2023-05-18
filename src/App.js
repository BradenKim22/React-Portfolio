import logo from './logo.svg';
import './App.css';
import About from './components/about-me';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import { ResumeNoDefault } from './components/resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
