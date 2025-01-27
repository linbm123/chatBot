import React from 'react';
import { Message as MessageType } from '../types';
import {MESSAGE_TYPES} from "../constant.ts";

interface MessageProps {
    message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const isSent = message.type === MESSAGE_TYPES.SENT;
    return (
        <div className={`message ${isSent ? MESSAGE_TYPES.SENT : MESSAGE_TYPES.RECEIVED} ${message.deleted ? 'deleted' : ''}`}>
            <p>{message.deleted ? 'This message has been deleted' : message.text}</p>
            <small>{message.timestamp}</small>
        </div>
    );
};

export default Message;