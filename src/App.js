import Button from "./Button";
import styles from "./App.module.css"
import {useState} from 'react';

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => {
        setValue((current) => current + 1);
        console.log(counter);
    }
    return (
        <div >
            <h1>Welcome back!</h1>
            <Button onClick={onClick} text={"Continue"}/>
        </div>
    )

}

export default App;
