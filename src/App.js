import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'


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
         Hyeong Yun
         jungyu
        </a>
      </header>
    </div>
  );
}

export default App;