import { Children, createContext, useState } from 'react';

export const SideBarContext = createContext();

export const SideBarProvider = ({ Children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
            {Children}
        </SideBarContext.Provider>
    );
};
