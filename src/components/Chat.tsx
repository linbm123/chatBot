import MessageList from "./MessageList.tsx";
import Footer from "./Footer.tsx";
import Sidebar from "./Sidebar.tsx";
import {useChatContext} from "../context/ChatContext.tsx";

const Chat = () => {
    const { isSidebarVisible } = useChatContext();

    return (
        <div className="main-content">
            <div className="chat-area">
                <MessageList />
                <Footer />
            </div>
            {isSidebarVisible && <Sidebar />}
        </div>
    )
}

export default Chat;