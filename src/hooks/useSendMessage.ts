import { useCallback } from 'react';
import { useChatContext } from '../context/ChatContext';
import { v4 } from 'uuid';

export const useSendMessage = () => {
    const { addMessage, setIsSending } = useChatContext();
    console.log('hook');

    const handleSendMessage = useCallback((text: string) => {
        setIsSending(true);

        const newMessage = {
            id: v4(),
            text,
            timestamp: new Date().toLocaleString(),
            type: 'sent',
        };

        // Add the new sent message
        addMessage(newMessage);

        // Simulate the bot response after a delay
        setTimeout(() => {
            const botResponse = {
                id: v4(),
                text: text,
                timestamp: new Date().toLocaleString(),
                type: 'received',
            };

            // Add the received bot response
            addMessage(botResponse);
            setIsSending(false);
        }, 1500);
    }, [addMessage, setIsSending]);

    return { handleSendMessage };
};
