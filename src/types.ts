export type MessageType = 'sent' | 'received';

export interface Message {
    id: string;
    text: string;
    timestamp: string;
    type: MessageType;
    deleted?: boolean;
}

export interface ChatContextProps {
    messages: Message[];
    addMessage: (message: Message) => void;
    isSending: boolean;
    setIsSending: (isSending: boolean) => void;
    toggleSidebar: () => void;
    resendMessage: (message: Message) => void;
    deleteMessage: (id: string) => void;
    isSidebarVisible: boolean;
}