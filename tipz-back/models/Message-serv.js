const mongoose = require("mongoose");
const messageModel = require("./MessageV2");
mongoose.set("debug", true);


async function findMessagebyUsername(name) {
  return await messageModel.find({ username: name });
}

async function addMessage(msg) {
  try {
    console.log(msg);
    const messageToAdd = new messageModel(msg);
    const savedMsg = await messageToAdd.save();
    return savedMsg;
  } catch (error) {
    console.log(error);
    return false;
  }
}

exports.addMessage = addMessage;