import './App.css';
import { useState } from 'react';
import Axios from 'axios';

export default function App() {
  const [password, setPassword] = useState([]);
  function req() {
    Axios.get("http://localhost:3001/wify").then(res => setPassword(res.data));
  }
  return (
    <div className="App">
      <header className="App-header">
        {password.map(item => <p className="display-2">{item.passwd}</p>)}
        <button className="btn btn-primary" onClick={req}>Show password</button>
      </header>
    </div>
  );
}