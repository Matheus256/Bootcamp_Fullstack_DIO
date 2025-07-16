/* import logo from '../logo.svg'; */
import './App.css';
import Counter from '../Counter/Counter';
import SmartCounter from '../SmartCounter/SmartCounter';
import IFoodCounter from '../IFoodCounter/IFoodCounter';

function App() {
  return (
    <>
      <h1>Olá Mundo!</h1>
      <h2>Versão 1 do Contador</h2>
      <Counter></Counter>
      <h2>Versão 2 do Contador</h2>
      <SmartCounter></SmartCounter>
      <h2>Versão IFood do Contador</h2>
      <IFoodCounter></IFoodCounter>
    </>
  );
}

/*function App() {
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
} */


export default App;
