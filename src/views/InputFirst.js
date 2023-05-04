import React, {useState} from "react";

const InputFirst = () => {

    const [ textValue, setTextValue ] = useState("");

    const onChange = (e) => {
        setTextValue( e.target.value )
    }

    return (
        <div>
            <input type="text" value={textValue} placeholder="텍스트를 입력하세요." onChange={onChange}/>
            <br />
            <p>{textValue}</p>
        </div>
    )
}

export default InputFirst;
