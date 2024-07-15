import React, { useState } from "react";
import StackedListView from "./StackedListView"; // Adjust the import based on your file structure
import MessageList from "./MessageList"; // Adjust the import based on your file structure

const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null); // Use a boolean to indicate a chat is selected
  const [messages, setMessages] = useState([]);

  const handleChatTap = (chat_id) => {
    setSelectedChat(chat_id);
    fetchMessages(chat_id);
  };

  const fetchMessages = async (chat_id) => {
    try {
      const response = await fetch(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888`
      );
      const data = await response.json();
      if (data.status === "success") {
        const newMessages = data.data.map((xyz) => ({
          message: xyz.message,
        }));
        setMessages(newMessages);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return (
    <div>
      {selectedChat ? (
        <MessageList messages={messages} />
      ) : (
        <StackedListView onChatTap={handleChatTap} />
      )}
    </div>
  );
};

export default ChatApp;
