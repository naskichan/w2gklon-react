import logo from './logo.svg';
import './App.css';
import { useState, React } from 'react';

function App() {

  let [playlists] = useState(0);
  
  const requestData = async () => {
    const response = await fetch('http://localhost:3001/api/playlists')
    const body = await response.json();
    
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    
    return body;
  }
  requestData().then(res => playlists = res.express)

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
        {playlists}
        
      </header>
    </div>
  );
}

export default App;
