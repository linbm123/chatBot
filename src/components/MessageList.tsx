import React, {useEffect, useRef} from 'react';
import { useChatContext } from '../context/ChatContext';
import Message from './Message';

import "../css/massageList.css";

const MessageList: React.FC = () => {
    const { messages } = useChatContext();
    const messageListRef = useRef<HTMLDivElement>(null);
    console.log('MessageList');

    // Scroll to the bottom whenever the messages change
    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, [messages]);
    return (
        <div className="message-list"  ref={messageListRef}>
            {messages.map((msg) => (
                <Message key={msg.id} message={msg} />
            ))}
        </div>
    );
};

export default MessageList;
