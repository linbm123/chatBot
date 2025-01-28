import React, {createContext, useState, useContext, ReactNode, useCallback, useMemo} from 'react';

type SidebarContextProps = {
    toggleSidebar: () => void;
    isSidebarVisible: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

type ChatProviderProps = {
    children: ReactNode;
}

export const SidebarProvider: React.FC<ChatProviderProps> = ({children}) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

    const toggleSidebar = useCallback(() => {
        setIsSidebarVisible((prev) => !prev);
    }, []);

    const api = useMemo(() => {
        return {isSidebarVisible, toggleSidebar};

    }, [isSidebarVisible, toggleSidebar]);

    return (
        <SidebarContext.Provider value={api}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebarContext = (): SidebarContextProps => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useChatContext must be used within a ChatProvider');
    }
    return context;
};
