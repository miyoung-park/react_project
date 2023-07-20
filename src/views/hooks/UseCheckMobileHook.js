import {useEffect, useState} from "react";

const UseCheckMobileHook = () => {

    const [ isMobile,setIsMobile ] = useState("");

    useEffect(() => {
        const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        setIsMobile( mobile );
    }, []);


    const checkIsMobile = () => {
        return isMobile;
    }

    return {
        checkIsMobile
    }
}

export default UseCheckMobileHook;