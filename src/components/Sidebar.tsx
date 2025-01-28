import {useChatContext} from "../context/ChatContext.tsx";
import {MESSAGE_TYPES} from "../constant.ts";
import {useSidebarContext} from "../context/SidebarContext.tsx";

import "../css/sidebar.css";

const Sidebar = () => {
    const {messages, resendMessage, deleteMessage, isSending} = useChatContext();
    const {isSidebarVisible} = useSidebarContext();

    return (
        <>
            {isSidebarVisible && (
                <div className="sidebar">
                    <h2>Message History</h2>
                    <ul>
                        {messages.filter((msg) => msg.type === MESSAGE_TYPES.SENT && !msg.deleted)
                            .map((msg) => (
                                <li key={msg.id}>
                                    <p>{msg.text}</p>
                                    <small>{msg.timestamp}</small>
                                    <div className="button-group">
                                        <button
                                            disabled={isSending}
                                            onClick={() => resendMessage(msg)}>Resend
                                        </button>
                                        <button onClick={() => deleteMessage(msg.id)}>Delete</button>
                                    </div>
                                </li>))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Sidebar;
