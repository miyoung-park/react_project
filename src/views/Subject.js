import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Subject = (props) => {

    const propTitle = props.title;
    const propSub = props.sub;

    const [ title, setTitle ] = useState(propTitle);
    const [ sub, setSub ] = useState(propSub);
    const [ count , setCount ] = useState(0);

    useEffect(() => {
        console.log( "value changed... ");
    }, [ title, sub ]);

    const onClickTitle = () =>  {
        setTitle( count % 2 > 0 ? "changed WEB ~" : propTitle );
        setSub( count % 2 > 0 ? "changed Subscription ~" : propSub );
        setCount( count + 1 );
    }

    return (
        <header>
            <h1>{ title }</h1>
            { sub }
            <br/>
            <button onClick={ onClickTitle }>CLICK</button>
        </header>
    )
}

Subject.propTypes = {
    title: PropTypes.string,
    sub: PropTypes.string,
}


export default Subject;