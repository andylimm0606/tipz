import React, {useState, useEffect } from "react"

const App = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/get_all_messages")
                const jsonData = await response.json()
                setData(jsonData)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <h1>Hello</h1>

            <div style={{maxWidth:'40%'}}>
                {data.map((item) => (
                    <div>
                        <p>Message: {item.message}</p>
                        <p>Rating: {item.rating}</p>
                        <p>Explanation: {item.explanation} </p>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default App
