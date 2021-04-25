import { createContext, useState } from 'react';
import Cookies from 'universal-cookie';

export type GlobalContextType = {
    inverted: boolean;
    toggleInverted: () => void;
}

const cookieName = 'darkMode';
const cookieAge = 60 * 24 * 7; 

const cookies = new Cookies();

let inverted: boolean;
const cookieValue = cookies.get<string>(cookieName)
if(typeof cookieValue === 'string'){
    inverted = cookieValue === 'true';
}else{
    inverted = true;
}

export const GlobalContext = createContext({inverted: inverted, toggleInverted: () =>{}});

export const GlobalContextComponet: React.FC = (props) => {
    const [invertedState, setInverted] = useState(inverted);

    const defaultGlobalContext = {
        inverted: invertedState,
        toggleInverted: () => {
            setInverted((old) => {
                updateBodyDarkMode(!old);
                return !old
            });
        }
    }

    const updateBodyDarkMode = (inverted: boolean) => {
        cookies.set(cookieName, inverted , {path: '/', sameSite: 'strict', maxAge: cookieAge});
        if (inverted) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      };

    updateBodyDarkMode(invertedState);

    return (
        <GlobalContext.Provider value={defaultGlobalContext}>
            {props.children}
        </GlobalContext.Provider>
    );
}
