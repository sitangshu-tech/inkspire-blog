const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  image: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  reactions: {
    type: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
      }
    ],
    default: []
  },
  comments: [
    {
      name: String,
      text: String,
      date: { type: Date, default: Date.now },
          

    }
  ],
  
   
},
{ timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);