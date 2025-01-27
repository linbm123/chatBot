import React, { useState, useCallback, KeyboardEvent } from "react";
import { useChatContext } from "../context/ChatContext";

import "../css/footer.css"

const Footer= () => {
    const [message, setMessage] = useState("");
    const { isSending, sendMessage, toggleSidebar } = useChatContext();

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }, []);

    const handleSend = useCallback(() => {
        sendMessage(message);
        setMessage("");
    }, [message, sendMessage]);

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isSending && message.trim()) {
             handleSend();
        }
    };

    const handleToggleSidebar = useCallback(() => {
        toggleSidebar();
    }, [toggleSidebar]);

    return (
        <footer>
            <button onClick={handleToggleSidebar}>Toggle Sidebar</button>
            <input
                type="text"
                value={message}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Type a message..."
            />
            <button onClick={handleSend} disabled={isSending || !message.trim()}>
                {isSending ? "Sending..." : "Send"}
            </button>
        </footer>
    );
};

export default Footer;
