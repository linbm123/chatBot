import React from 'react';
import { useChatContext } from '../context/ChatContext';  // Access context

import "../css/sidebar.css";

const Sidebar: React.FC = () => {
    const { messages, resendMessage, deleteMessage } = useChatContext();
    console.log('Sidebar');

    return (
        <div className="sidebar">
            <h2>History Messages</h2>
            <ul>
                {messages.map((msg) => {
                    console.log("msgmsg", msg);
                    return(
                        msg.type=== 'sent' && <li key={msg.id}>
                            <p>{msg.text} <small>{msg.timestamp}</small></p>
                            <button onClick={() => resendMessage(msg)}>Resend</button>
                            <button onClick={() => deleteMessage(msg.id)}>Delete</button>
                        </li>
                    )})}
            </ul>
        </div>
    );
};

export default Sidebar;
