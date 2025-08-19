import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to your User collection
    ref: "User",
    required: true
  },
  sessionId: {
    type: String, // Group messages in a conversation
    required: true
  },
  sender: {
    type: String,
    enum: ["user", "ai", "system"],
    required: true
  },
  text: {
    type: String,
    required: true
  },
  model: {
    type: String, // e.g., "gemini-1.5-flash"
    default: "gemini-1.5-flash"
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export const ChatMessage = mongoose.model("ChatMessage", chatMessageSchema);
