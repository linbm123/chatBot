import  {useRef} from 'react';
import {useChatContext} from '../context/ChatContext.tsx';
import useScrollToBottom from "../hooks/useScrollToBottom.tsx";
import Message from './Message';

import "../css/massageList.css";

const MessageList = () => {
    const {messages} = useChatContext();
    const messageListRef = useRef<HTMLDivElement>(null);

    useScrollToBottom(messageListRef, [messages.length]);
    return (
        <div className="message-list" ref={messageListRef}>
            {messages.map((msg) => (
                <Message key={msg.id} message={msg}/>
            ))}
        </div>
    );
};

export default MessageList;
