import {useCallback, useMemo, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {ChatContextValue, Message} from '../types';
import {MESSAGE_TYPES} from "../constant.ts";

export const useChat = (): ChatContextValue => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isSending, setIsSending] = useState(false);

    const addMessage = useCallback((message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    }, []);

    const sendMessage = useCallback(
        (text: string) => {
            setIsSending(true);

            const newMessage: Message = {
                id: uuidv4(),
                text,
                timestamp: new Date().toLocaleString(),
                type: MESSAGE_TYPES.SENT,
                deleted: false,
            };

            addMessage(newMessage);

            setTimeout(() => {
                const botResponse: Message = {
                    id: uuidv4(),
                    text: text,
                    timestamp: new Date().toLocaleString(),
                    type: MESSAGE_TYPES.RECEIVED,
                    deleted: false,
                };

                addMessage(botResponse);
                setIsSending(false);
            }, 1500);
        },
        [addMessage]
    );

    const resendMessage = useCallback((message: Message) => {
            sendMessage(message.text);
        },
        [sendMessage]
    );

    const deleteMessage = useCallback((id: string) => {
        setMessages((prevMessages) => {
            const messageIndex = prevMessages.findIndex(msg => msg.id === id);
            if (messageIndex === -1) return prevMessages;

            const newMessages = [...prevMessages];
            newMessages[messageIndex] = {...newMessages[messageIndex], deleted: true};
            if (messageIndex + 1 < newMessages.length) {
                newMessages[messageIndex + 1] = {...newMessages[messageIndex + 1], deleted: true};
            }
            return newMessages;
        });
    }, []);
    return useMemo(() => {
        return {
            messages,
            isSending,
            addMessage,
            sendMessage,
            resendMessage,
            deleteMessage,
        };

    }, [messages,
        isSending,
        addMessage,
        sendMessage,
        resendMessage,
        deleteMessage,])
};
