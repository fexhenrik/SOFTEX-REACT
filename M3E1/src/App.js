import logo from './logo.svg';
import './App.css';
import './components/Hello';
import './components/Welcome';
import Hello from './components/Hello';
import Welcome from './components/Welcome';

function App() {

  const nome = "Felipe Henrique"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Hello />
        <Welcome nome = "Carol" />
        <Welcome nome = "Pedro" />
        <Welcome nome={nome} />
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
