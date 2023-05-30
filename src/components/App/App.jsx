import './App.css';
import {useState} from 'react'; //object destructuring; useState is specific
// useState is a hook; hooks start with use and look like useThing;
import Clicker from '../Clicker/Clicker';

function App() {

    const [name, setName] = useState ('Luke');
    
    const [nameInput, setNameInput] = useState('');

    // if trying to do both of these, instead of just changing he name, 
    // need to do full function as here, instead of line function as below
    // const handleNameChange = (event) => {
    //     console.log(event.target.value);
    //     setNameInput(event.targetvalue);
    // }
  

    
    const updateName = () => {
        console.log('udpateName clicked!!');
        setName(nameInput);
        setNameInput('');
    }

    

    // RENDER COMPONENT 
    return (
        <div className="App">
        <p>Hello! My name is {name}.</p>
            <input value={nameInput} placeholder="enter name" onChange={(event) => setNameInput(event.target.value)}/>
            <button onClick={updateName}>New Name</button>
            <Clicker />
            <Clicker />
            <Clicker />
            <Clicker />
            <Clicker />
        </div>
    );
}

export default App;
