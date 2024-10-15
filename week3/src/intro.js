import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Intro()
{
    const [counter,setCounter] = useState(10);

    function incrementCounter(){
        setCounter(counter+1);
    }

    function decermentCounter(){
        setCounter(counter-1);
    }

    useEffect(()=>{
        fetch('http://localhost:9000')
        .then(response=>console.log(response.text()))
        .catch(error=>console.error(error));
    })

    return(
        <div>"intro page": current: {counter}
        <Button onClick={incrementCounter}>Increase Value</Button>
        <Button onClick={decermentCounter}>Decrease Value</Button>
        </div>
    );

}

export default Intro;

