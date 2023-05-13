const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, "Enter a tip"],
      unique: [true, "This tip already exist"],
    },
  }
  );



const Message = mongoose.model('Message', messageSchema);

module.exports = Message;