import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Contact(){
    const navigate=useNavigate();
    const location=useLocation();

    console.log('location',location);
    const handleclick =(event) =>{
        event.preventDefault();
        //navigate('/service');
        console.log('value ref',inputRef.current)
    }
const inputRef= useRef(null);
    const handlechange =(event) =>{
        console.log('value',event.target.value);
    }
    const handleFocus =(event) =>{
        event.preventDefault();
        inputRef.current.focus();
    }
    return(
<form>

        <div>
            <input type="text"  placeholder="adrss@gmail.com" onChange={handlechange}/><br/>
            <input type="password" placeholder="password" ref={inputRef}/><br/>
            <button onClick={handleFocus}>input focus</button>
            <button type="submit" onClick={handleclick}>Enregistrer</button>
        </div>
        </form>
    )
}
export default Contact;