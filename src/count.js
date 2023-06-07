import {useEffect, useState } from "react";
function Count (){
    const [ count, setCount]=useState(0);
    const [ test, setTest]=useState(0);
    useEffect(()=>{
        setCount(count+1)},[]);
      useEffect(()=>{
        setTest(count+1)},[count]); 

   const increment = () => {
            setCount(count+1);
        }; 
    return(
<div>
<div>{count}</div>
<div>{test}</div>
<button onClick={increment}>+</button>
</div>
)
}
export default Count;