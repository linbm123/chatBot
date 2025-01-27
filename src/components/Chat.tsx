import MessageList from "./MessageList.tsx";
import Footer from "./Footer.tsx";
import Sidebar from "./Sidebar.tsx";

const Chat = () => {
    return (
        <div className="main-content">
            <div className="chat-area">
                <MessageList />
                <Footer />
            </div>
            <Sidebar />
        </div>
    );
};

export default Chat;
