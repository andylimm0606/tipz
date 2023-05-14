import React, {useState, useEffect} from 'react';
import Form from './Form'
import Table from './table'
import axios from 'axios'
import "./App.css"



const App = () => {
    const [msgs, setMessages] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                getAll()
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
    }, [refreshKey])

    async function getAll(){
        const response = await fetch("http://localhost:8000/get_all_messages")
        const jsonData = await response.json()
        setMessages(jsonData)
    }
   

    async function makePostCall(msg){
        try {
        return await axios.post('http://localhost:8000/add_messageV2', msg);
        }
        catch (error) {
        console.log(error);
        return false;
        }
    }

    
    function updateList(msg) {
        makePostCall(msg).then( result => {
        if (result.status === 201)
            setMessages([...msgs, result.data]);
            setRefreshKey(oldKey => oldKey +1)
        });
    }

    return (
       <div className='body'>
         <div className="desktop-desktop-wrapper">
            <div className="desktop-desktop">
                <div 
                className = "desktop-overlap"
                style={{
                    backgroundImage: "url(vector-1.svg)",
                }}>
                    <h1 className="desktop-text-wrapper">Random quote from : </h1>

                </div>
                <div className='desktop-ellipse'></div>
                <div className='desktop-ellipse2'></div>
                <div className='desktop-ellipse3'></div>
                <div className='desktop-ellipse4'></div>
                <div className='desktop-ellipse5'></div>
                <div className='desktop-ellipse6'></div>
                <div className='desktop-ellipse7'></div>
                <div className='desktop-ellipse8'></div>
                <div className='desktop-overlap-group'>
                    <div className='desktop-rectangle'></div>
                    <div className='desktop-rectangle-2'>
                        <Form handleSubmit={updateList} />
                    </div>

                    <div className='desktop-table-box'>
                    
                            {msgs.map((item) => (
                            <div className='desktop-table-text-wrap'>
                                <p>Message: {item.message}</p>
                                <p>Rating: {item.rating}</p>
                                <p>Explanation: {item.explanation} </p>
                                <hr />
                            </div>
                            ))}
                        </div>
                    

                    
                </div>
                

                
            </div>
            
        </div>
       </div>
    );
}






export default App;

