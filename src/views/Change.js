import About from "./About";
import Home from "./Home";
import { React, useState } from "react";

const Change = () => {

    const [ count , setCount ] = useState(0);
    const [ element , setElement] = useState("");

    function changeComponent() {
        setCount( count + 1);
        if( count % 2 === 0 ){
            setElement( <About /> )
        } else {
            setElement( <Home /> )
        }
    }

    return (
        <div>
            <button onClick={changeComponent}>CLICK</button>
            { element }
        </div>
    )

}

export default Change;