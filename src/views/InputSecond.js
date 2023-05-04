import React, {useState} from "react";

const InputSecond = () => {

    const [ inputs, setInputs ] = useState({
        name : "",
        email: "",
        tell: "",
    });

    const { name, email, tell } = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...inputs, // 깊은 복사
            [id] : value
        })
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={ name } placeholder="텍스트를 입력하세요." onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={ email } placeholder="이메일을 입력하세요." onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tell" id="tell" value={ tell } placeholder="전화번호를 입력하세요." onChange={onChange}/>
            </div>
            <p>이름: {name} | 이메일: {email} | 전화번호: {tell}</p>
        </div>
    )
}

export default InputSecond;
