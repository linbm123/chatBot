import {ChatProvider} from "./context/ChatContext.tsx";
import {useState} from "react";
import Header from "./components/Header.tsx";
import Chat from "./components/Chat.tsx";
import "./App.css"

const App: React.FC = () => {
    const [username] = useState('JohnDoe');
    console.log('App');

    return (
        <div className="chat-container">
            <Header username={username} />
            <ChatProvider>
                <Chat />
            </ChatProvider>
        </div>
    );
};
export default App