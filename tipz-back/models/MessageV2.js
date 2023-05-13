const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    ai_written: Boolean,
    message: String,
    rating: String,
    explanation: String,
}, {collection: "messagev2"})

const MessageV2 = mongoose.model("MessageV2", messageSchema)

module.exports = MessageV2
