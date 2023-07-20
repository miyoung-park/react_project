// 함수형 컴포넌트
import React, {useState} from "react";
import useCheckMobileHook from "./hooks/UseCheckMobileHook";

const Home = () => {
    const { checkIsMobile } = useCheckMobileHook();
    const [ content, setContent ] = useState("");

    const handleContent = () => {
        setContent( checkIsMobile() ? "모바일로 접속한 유저입니다." : "웹으로 접속한 유저입니다." );
    }

    return (
        <>
            <h1>Home 화면 입니다.</h1>
            <br/>
            <button onClick={handleContent}>CHECK OS TYPE</button>
            <p>{ content }</p>
        </>
    )
}
export default Home;


// 클래스형 컴포넌트
// import React, {Component} from "react";
//
// class Home extends Component {
//     render() {
//         return <h1>Home 화면 입니다.</h1>
//     }
// }
// export default Home;
