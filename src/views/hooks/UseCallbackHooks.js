import {useCallback, useState} from "react";
import Subject from "../Subject";
import UseCallbackSideComponent from "./UseCallbackSideComponent";

const UseCallbackHooks = () => {

    const [ number, setNumber ] = useState(0);
    const [ characters, setCharacters ] = useState("");


    const printCharacters = () => {
        setCharacters(
            characters + "ha"
        )
        doPrintPlusNumber();
    }
    const plusNumber = () => {
        setNumber( number + 1);
    }

    const doPrintPlusNumber = useCallback(() => {
        printPlusNumber();
    }, [number]);

    const printPlusNumber = () => {
        return number;
    }


    return (
        <>
            <button onClick={printCharacters}>printCharacters</button>
            <button onClick={plusNumber}>plusNumber</button>
            <UseCallbackSideComponent callback={printPlusNumber} />
        </>
    )

}

export default UseCallbackHooks;