import { createContext } from 'react';

export type GlobalContextType = {
    inverted: boolean;
}

const defaultGlobalContext = {
    inverted: true
}

export const GlobalContext = createContext(defaultGlobalContext);

export const GlobalContextComponet: React.FC = (props) => {
    return (
        <GlobalContext.Provider value={defaultGlobalContext}>
            {props.children}
        </GlobalContext.Provider>
    );
}