import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { v4 } from 'uuid';
import { Message } from '../types';

interface ChatContextProps {
    messages: Message[];
    addMessage: (message: Message) => void;
    isSending: boolean;
    setIsSending: (isSending: boolean) => void;
    toggleSidebar: () => void;
    resendMessage: (message: Message) => void;
    deleteMessage: (id: string) => void;
    isSidebarVisible: boolean;
    handleSendMessage: (text: string) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

interface ChatProviderProps {
    children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

    const addMessage = (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const toggleSidebar = () => {
        setIsSidebarVisible((prev) => !prev);
    };

    const handleSendMessage = useCallback((text: string) => {
        setIsSending(true);

        const newMessage = {
            id: v4(),
            text,
            timestamp: new Date().toLocaleString(),
            type: 'sent' as const,
        };

        // Add the new sent message
        addMessage(newMessage);

        // Simulate the bot response after a delay
        setTimeout(() => {
            const botResponse = {
                id: v4(),
                text: text,
                timestamp: new Date().toLocaleString(),
                type: 'received' as const,
            };

            // Add the received bot response
            addMessage(botResponse);
            setIsSending(false);
        }, 1500);
    }, []);

    const resendMessage = (message: Message) => {
        handleSendMessage(message.text);
    };

    const deleteMessage = (id: string) => {
        setMessages((prevMessages) => {
            const messageIndex = prevMessages.findIndex(msg => msg.id === id);
            if (messageIndex === -1) return prevMessages;

            // Mark both the user message and the bot's response as deleted
            const newMessages = [...prevMessages];
            newMessages[messageIndex] = { ...newMessages[messageIndex], deleted: true };
            if (messageIndex + 1 < newMessages.length) {
                newMessages[messageIndex + 1] = { ...newMessages[messageIndex + 1], deleted: true };
            }
            return newMessages;
        });
    };

    return (
        <ChatContext.Provider
            value={{
                messages,
                addMessage,
                isSending,
                setIsSending,
                toggleSidebar,
                resendMessage,
                deleteMessage,
                isSidebarVisible,
                handleSendMessage,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const useChatContext = (): ChatContextProps => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChatContext must be used within a ChatProvider');
    }
    return context;
};
