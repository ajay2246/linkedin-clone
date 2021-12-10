import {useState} from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Nav';

function App() {
  const [display,setDisplay] = useState("Home")
  return (
    <div className="App">
      <Navbar setDisplay={setDisplay}/>
      <Main display={display}/>
    </div>
  );
}

export default App;
