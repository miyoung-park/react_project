import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Subject = ({
    propTitle = "",
    propSub= ""
                 }) => {
    const [ title, setTitle ] = useState(propTitle);
    const [ sub, setSub ] = useState(propSub);
    const [ count , setCount ] = useState(0);
    const [ user, setUser ] = useState({
        uid : "user1",
        passwd: 12345,
    });

    useEffect(() => {
        console.log( "value changed... ");
    }, [ title, sub ]);

    const onClickTitle = () =>  {
        setTitle( count % 2 > 0 ? "changed WEB ~" : propTitle );
        setSub( count % 2 > 0 ? "changed Subscription ~" : propSub );
        setCount( count + 1 );
    }

    const onClickUser = () => {
        setUser((prev) => ({
            ...user,
            uid : "anonymous"
        }))
    }

    return (
        <>
            <header>
                <h1>{ title }</h1>
                <h2>{ sub }</h2>
                <p>{ user.uid }</p>
                <br/>
                <button onClick={ onClickTitle }>CLICK</button>
                <button onClick={ onClickUser }>CLICK</button>
                {/*<button onClick={ onClickUser("uid", "test2", "123456789") }>CLICK</button>*/}
            </header>
        </>
    )
}

Subject.propTypes = {
    title: PropTypes.string,
    sub: PropTypes.string,
}


export default Subject;