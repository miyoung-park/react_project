const UseCallbackSideComponent = ({ callback =()=>{} }) => {

    console.log("자식 컴포넌트 재 렌더링");

    return (
        <>
            <div>
                <p>계산된 숫자는? { callback() }</p>
            </div>
        </>
    )
}

export default UseCallbackSideComponent;