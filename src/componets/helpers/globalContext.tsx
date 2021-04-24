import { createContext, useState } from 'react';

export type GlobalContextType = {
    inverted: boolean;
    toggleInverted: () => void;
}

export const GlobalContext = createContext({inverted: true, toggleInverted: () =>{}});

export const GlobalContextComponet: React.FC = (props) => {
    const [inverted, setInverted] = useState(true);

    const defaultGlobalContext = {
        inverted: inverted,
        toggleInverted: () => {
            setInverted((old) => {
                updateBodyDarkMode(!old);
                return !old
            });
        }
    }

    const updateBodyDarkMode = (inverted: boolean) => {
        if (inverted) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      };

    updateBodyDarkMode(inverted);

    return (
        <GlobalContext.Provider value={defaultGlobalContext}>
            {props.children}
        </GlobalContext.Provider>
    );
}
