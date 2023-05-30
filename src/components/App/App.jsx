import './App.css';
import {useState} from 'react'; //object destructuring; useState is specific
// useState is a hook; hooks start with use and look like useThing;
import Clicker from '../Clicker/Clicker';

function App() {

    
  

    // RENDER COMPONENT 
    return (
        <div className="App">
            <p>Hello! My name is Luke.</p>
            <Clicker />
            <Clicker />
            <Clicker />
            <Clicker />
            <Clicker />
        </div>
    );
}

export default App;
