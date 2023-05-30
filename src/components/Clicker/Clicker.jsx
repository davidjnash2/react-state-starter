import {useState} from 'react';

function Clicker() {

    const [count, setCount] = useState(0); // array destructuring
    // useState hook makes state variables!

    
    const handleClick = () => {
        console.log('Click me got clicked!!');
        // console.log(count);
        setCount(count + 1);
    
    }

    return (
        <>
        <button onClick={handleClick}>Click me!</button>
        <p>I've clicked the button {count} times.</p>
        </>
    )
}

export default Clicker;