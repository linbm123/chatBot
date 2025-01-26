import React from 'react';
import { Message as MessageType } from '../types';

import "../css/message.css";

interface MessageProps {
    message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const isSent = message.type === 'sent';
    console.log('Message');
    return (
        <div className={`message ${isSent ? 'sent' : 'received'}`}>
            <p>{message.text}</p>
            <small>{message.timestamp}</small>
        </div>
    );
};

export default Message;