import React, { useRef } from 'react';
import { useChatContext } from '../context/ChatContext';
import useScrollToBottom from "../hooks/useScrollToBottom.tsx";
import Message from './Message';

import "../css/massageList.css";

const MessageList: React.FC = () => {
    const { messages } = useChatContext();
    const messageListRef = useRef<HTMLDivElement>(null);
    console.log('MessageList');

    useScrollToBottom(messageListRef, [messages]);

    return (
        <div className="message-list"  ref={messageListRef}>
            {messages.map((msg) => (
                <Message key={msg.id} message={msg} />
            ))}
        </div>
    );
};

export default MessageList;
