const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Message = require("./models/Message")
const port = 8000

app.use(express.json())

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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
