import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouterScollHook: React.FC = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [pathname]);

    return (
        <>
            {props.children}
        </>
    )
}

export default RouterScollHook