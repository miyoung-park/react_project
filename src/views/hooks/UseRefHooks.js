import { useRef } from "react";

const UseRefHooks = () => {

    const child = useRef();
    const handleAutoInput = () => {
       child.current.value = "input field 를 채웁니다."
       child.current.focus();
    }

    return (
        <>
            <div>
                <button onClick={handleAutoInput}>FOCUS INPUT</button>
                <input ref={child}/>
            </div>
        </>
    )
}

export default UseRefHooks;