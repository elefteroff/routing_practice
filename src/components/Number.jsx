import React from 'react';
import { useParams } from "react-router";

const Number = (props) => {
    // destructing the "num" variable from the route(url).
    const { num } = useParams();
    //  "isNaN" stands for "is Not a Number"
    console.log(isNaN(num));
    return (
        <div>
            {isNaN(num) ? 
        <fieldset>
            <legend>Hello.jsx</legend>
            <h2>The word is: { num }</h2> 
        </fieldset> :
        <fieldset>
            <legend>Number.jsx</legend>
            <h2>The number is: { num }</h2>
        </fieldset>}
        </div>);
};

export default Number;

