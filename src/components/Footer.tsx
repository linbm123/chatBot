import React, { useState } from 'react';
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
        handleSendMessage(message);
        setMessage('');
    };

    return (
        <footer>
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
            <input
                type="text"
                value={message}
                onChange={handleChange}
                placeholder="Type a message..."
            />
            <button onClick={handleSend} disabled={isSending}>
                {isSending ? 'Sending...' : 'Send'}
            </button>
        </footer>
    );
};

export default Footer;
