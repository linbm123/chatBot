import React, { createContext, ReactNode, useContext } from "react";
import { useChat } from "../hooks/useChat";
import {ChatContextValue} from "../types.ts";

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

interface ChatProviderProps {
    children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const chat = useChat();

    return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>;
};

export const useChatContext = (): ChatContextValue => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChatContext must be used within a ChatProvider");
    }
    return context;
};
