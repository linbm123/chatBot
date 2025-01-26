import React, { useState, KeyboardEvent } from 'react';
import { useChatContext } from '../context/ChatContext';  // Access context

import "../css/footer.css"
import {useSendMessage} from "../hooks/useSendMessage.ts";

// interface FooterProps {
//     onSendMessage: (message: string) => void;
// }

const Footer= ({  }) => {
    const [message, setMessage] = useState<string>('');
    const { isSending, toggleSidebar } = useChatContext();  // Get context values
    console.log('footer');
    const { handleSendMessage } = useSendMessage();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSend = () => {
        if (message.trim()) {  // Only send if message is not empty or just whitespace
            handleSendMessage(message);
            setMessage('');
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && message.trim()) {
            handleSend();
        }
    };

    return (
        <footer>
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
            <input
                type="text"
                value={message}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
            />
            <button
                onClick={handleSend}
                disabled={isSending || !message.trim()}  // Disable if sending or empty message
            >
                {isSending ? 'Sending...' : 'Send'}
            </button>
        </footer>
    );
};

export default Footer;
