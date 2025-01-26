import React, { createContext, useState, useContext, ReactNode } from 'react';
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

    const resendMessage = (message: Message) => {
        addMessage({ ...message, id: v4(), timestamp: new Date().toISOString() });
    };

    const deleteMessage = (id: string) => {
        setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
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
