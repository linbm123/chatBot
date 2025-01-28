import React, {useState, KeyboardEvent, useCallback} from "react";
import {useSidebarContext} from "../context/SidebarContext.tsx";
import {useChatContext} from "../context/ChatContext.tsx";

import "../css/footer.css";

const Footer = () => {
    const [message, setMessage] = useState("");
    const {toggleSidebar} = useSidebarContext();
    const {sendMessage, isSending} = useChatContext();

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(e.target.value);
        }, []
    );

    const handleSend = useCallback(() => {
        sendMessage(message);
        setMessage("");
    }, [message, sendMessage]);

    const handleKeyPress = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !isSending && message.trim()) {
            handleSend();
        }
    }, [isSending, message, handleSend])

    return (
        <footer>
            <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
                Toggle Sidebar
            </button>
            <input
                type="text"
                value={message}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Type a message..."
                aria-label="Message Input"
            />
            <button
                onClick={handleSend}
                disabled={isSending || !message.trim()}
                aria-label="Send Message"
            >
                {isSending ? "Sending..." : "Send"}
            </button>
        </footer>
    );
};

export default Footer;
