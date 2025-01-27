import React from 'react';
import { useChatContext } from '../context/ChatContext';  // Access context

import "../css/sidebar.css";

const Sidebar: React.FC = () => {
    const { isSidebarVisible, messages, resendMessage, deleteMessage } = useChatContext();
    console.log('Sidebar');

    if (!isSidebarVisible) {
        return null;
    }

    return (
        <div className="sidebar">
            <h2>Message History</h2>
            <ul>
                {messages.map((msg) => (
                    msg.type === 'sent' && !msg.deleted && (
                        <li key={msg.id}>
                            <p>{msg.text}</p>
                            <small>{msg.timestamp}</small>
                            <div className="button-group">
                                <button onClick={() => resendMessage(msg)}>Resend</button>
                                <button onClick={() => deleteMessage(msg.id)}>Delete</button>
                            </div>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
