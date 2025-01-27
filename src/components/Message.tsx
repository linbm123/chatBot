import React from 'react';
import { Message as MessageType } from '../types';

interface MessageProps {
    message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const isSent = message.type === 'sent';
    console.log('Message');
    return (
        <div className={`message ${isSent ? 'sent' : 'received'} ${message.deleted ? 'deleted' : ''}`}>
            <p>{message.deleted ? 'This message has been deleted' : message.text}</p>
            <small>{message.timestamp}</small>
        </div>
    );
};

export default Message;