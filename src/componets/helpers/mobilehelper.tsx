import { useState, useEffect, createContext } from "react";

export const MobileContext = createContext(false);

const MobileContextProvider: React.FC = (props) => {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  let checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 900);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
      <MobileContext.Provider value={isScreenSmall}>
        {props.children}
      </MobileContext.Provider>
    )
}

export default MobileContextProvider;
