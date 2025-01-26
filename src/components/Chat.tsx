import MessageList from "./MessageList.tsx";
import Footer from "./Footer.tsx";
import Sidebar from "./Sidebar.tsx";
import {useChatContext} from "../context/ChatContext.tsx";

const Chat = () => {
    const {  isSidebarVisible } = useChatContext();

    return (
        <>
            <MessageList />
            {isSidebarVisible && <Sidebar />}
            <Footer />
        </>
    )
}

export default Chat;