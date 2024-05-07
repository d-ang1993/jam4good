import logo from './assets/clown-pepe-the-frog.gif'
import './App.css';
import Button from './Components';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Better Luck Next Time
        </p>
      <Button $primary>Normal</Button>
      </header>
    </div>
  );
}

export default App;
