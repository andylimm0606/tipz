const express = require("express")
const app = express()
const axios = require('axios')
const mongoose = require("mongoose")
const Message = require("./models/Message")
const MessageV2 = require("./models/MessageV2")
const port = 8000
const rateTip = require("./Utils/rateTip")

app.use(express.json())

require('dotenv').config();

const mongoURI = "mongodb+srv://user2:aZOW45E2IqH0ZqsB@cluster0.tyiyisl.mongodb.net/"


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error)
    })

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/add_message", async (req, res) => {
    try {
        // const { username, message } = req.body; // edit this later to grab info from request body
        const username = "bob"
        const message = "This is a test message with new"

        const new_message = new Message({ username, message })

        await new_message.save()

        res.status(201).json({ message: "Data saved successfully" })

    } catch (error) {
        console.error("Error saving data:", error)
        res.status(500).json({ message: "An error occurred while saving data" })
    }
})

app.get("/add_messageV2", async (req, res) => {
    try {
		const message = req.body.message
		
		const responseJSON = await rateTip(message)
		console.log(responseJSON)
		const rating = responseJSON.rating
		const explanation = responseJSON.explanation

        const new_message = new MessageV2({
            ai_written: false,
            message: message,
            rating: rating,
            explanation: explanation,
        })

        await new_message.save()

        res.status(201).json({ message: "Data saved successfully" })

    } catch (error) {
        console.error("Error saving data:", error)
        res.status(500).json({ message: "An error occurred while saving data" })
    }
})

app.get("/get_all_messages", async (req, res) => {
    try {

		const message = await Message.find().sort({ _id: -1 }) // sort by most recently added
        res.status(200).json(message)

    } catch (error) {
        console.error("Error retrieving messages:", error)
        res.status(500).json({
            message: "An error occurred while retrieving messages",
        })
    }
})

app.get("/random_tip", async (req, res) => {
    const message = "Write a single tip for sustainability, your response should be one complex sentence. Do not append any other commentary to the beginning or the end"

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: message },
                ],
            },
            {
				headers: {
					'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
					'Content-Type': 'application/json',
				  },
            }
        )

        const reply = response.data.choices[0].message.content

        res.json({ reply })
    } catch (error) {
        console.error("Error:", error)
        res.status(500).json({ error: "Something went wrong" })
    }
})

// For testing - rate user response function won't be called explicitly by the user, only by another backend route
app.get("/test_route", async (req, res) => {
	const response = await rateTip("Carpool with others") // Replace hard coded string with user input later 
	console.log(response)
	res.json({ response })
})

  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
