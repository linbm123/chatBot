export type MessageType = 'sent' | 'received';

export type Message = {
    id: string;
    text: string;
    timestamp: string;
    type: MessageType;
    deleted?: boolean;
}

export type ChatContextValue = {
    messages: Message[];
    isSending: boolean;
    isSidebarVisible: boolean;
    toggleSidebar: () => void;
    sendMessage: (text: string) => void;
    addMessage: (message: Message) => void;
    resendMessage: (message: Message) => void;
    deleteMessage: (id: string) => void;
}