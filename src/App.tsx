import {ChatProvider} from "./context/ChatContext.tsx";
import Header from "./components/Header.tsx";
import Chat from "./components/Chat.tsx";
import "./App.css"

const App: React.FC = () => {
    return (
        <div className="chat-container">
            <Header username={'JohnDoe'} />
            <ChatProvider>
                <Chat />
            </ChatProvider>
        </div>
    );
};
export default App