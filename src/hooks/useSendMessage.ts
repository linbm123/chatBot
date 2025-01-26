import { useChatContext } from '../context/ChatContext';

export const useSendMessage = () => {
    const { handleSendMessage } = useChatContext();
    return { handleSendMessage };
};
