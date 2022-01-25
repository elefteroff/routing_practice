import React from 'react';
import { useParams } from "react-router";

const Hello = (props) => {
    const { hello, backgroundcolor, exactcolor } = useParams();
    
    return (
        <div>
            <legend>Hello.jsx</legend>
            <fieldset>
                <h2 style={{
                backgroundColor: {backgroundcolor},
                color: {exactcolor},
                }}>The word is: {hello}</h2>
            </fieldset> 
        </div>);
};

export default Hello;