import MessageList from "./MessageList.tsx";
import Footer from "./Footer.tsx";
import Sidebar from "./Sidebar.tsx";
import {SidebarProvider} from "../context/SidebarContext.tsx";

const Chat = () => (
        <SidebarProvider>
            <div className="main-content">
                <div className="chat-area">
                    <MessageList/>
                    <Footer/>
                </div>
                <Sidebar/>
            </div>
        </SidebarProvider>
    );

export default Chat;
