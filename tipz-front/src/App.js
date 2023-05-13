import React, {useState, useEffect} from 'react';
import Form from './Form'
import axios from 'axios'


const App = () => {

    const [msgs, setMessages] = useState([]);

    async function makePostCall(msg){
        try {
        return await axios.post('http://localhost:8000/message', msg);
        }
        catch (error) {
        console.log(error);
        return false;
        }
    }

    function updateList(msg) {
        makePostCall(msg).then( result => {
        if (result.status === 201)
            setMessages([...msgs, result.data] );
        });
    }

   
    return (
        <div className="body">
            
            <Form handleSubmit={updateList} />
            
        </div>
    );
}



export default App;