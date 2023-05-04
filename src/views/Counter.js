import React, {useState} from "react";

const Counter = () => {
    // count = '0'이라는 값을 기본값으로 가지고 있는 count
    // setCount = count 를 세팅할 수 있는 setter 함수
    const [ count, setCount ] = useState(0);

    // 증가
    const increase = () => {
        // setter 함수로 상태 관리를 하겠다고 선언했기 때문에 해당 setter 를 사용해서 상태관리를 해줘야 함
        setCount( count + 1 ); // == count +=1
    }
    // 감소
    const decrease = () => {
        setCount( count - 1 );
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>count = {count}</p>
        </div>
    )
}

export default Counter;
