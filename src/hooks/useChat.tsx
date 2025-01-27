import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import {ChatContextValue, Message} from '../types';
import {MESSAGE_TYPES} from "../constant.ts";

export const useChat = (): ChatContextValue => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const addMessage = useCallback((message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarVisible((prev) => !prev);
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      setIsSending(true);

      const newMessage: Message = {
        id: uuidv4(),
        text,
        timestamp: new Date().toLocaleString(),
        type: MESSAGE_TYPES.SENT,
      };

      addMessage(newMessage);

      setTimeout(() => {
        const botResponse: Message = {
          id: uuidv4(),
          text: text,
          timestamp: new Date().toLocaleString(),
          type: MESSAGE_TYPES.RECEIVED,
        };

        addMessage(botResponse);
        setIsSending(false);
      }, 1500);
    },
    [addMessage]
  );

  const resendMessage = useCallback(
    (message: Message) => {
      sendMessage(message.text);
    },
    [sendMessage]
  );

  const deleteMessage = useCallback((id: string) => {
    setMessages((prevMessages) => {
      const messageIndex = prevMessages.findIndex(msg => msg.id === id);
      if (messageIndex === -1) return prevMessages;

      const newMessages = [...prevMessages];
      newMessages[messageIndex] = { ...newMessages[messageIndex], deleted: true };
      if (messageIndex + 1 < newMessages.length) {
        newMessages[messageIndex + 1] = { ...newMessages[messageIndex + 1], deleted: true };
      }
      return newMessages;
    });
  }, []);

  return {
    messages,
    isSending,
    isSidebarVisible,
    addMessage,
    toggleSidebar,
    sendMessage,
    resendMessage,
    deleteMessage,
  };
};
