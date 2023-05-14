import React, {useState} from 'react';
import "./App.css"

function Form(props) {
    const [tip, setTip] = useState(
        {
            message: "",
        }
    );

    function handleChange(event) {
        const { name, value } = event.target;
        
        if (name === "message")
            setTip(
                {message: value}
            );
        else
            setTip(
                {message: value}
            );
    
    
    }

    function submitForm() {
        props.handleSubmit(tip);
        setTip({message: ''});
    }

    return (
        <form>
            <label htmlFor="message"></label>
            <input
                type="text"
                name="message"
                id="message"
                value={tip.message}
                onChange={handleChange} />
            
            <input type="button" value="Submit" onClick={submitForm} />
        </form>
    );
}
export default Form;