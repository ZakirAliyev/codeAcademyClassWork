import { createContext, useState } from "react";

export const MenuContext = createContext(null);

function Context({ children }) {
    const [toggled, setToggled] = useState(false);

    return (
        <MenuContext.Provider value={[toggled, setToggled]}>
            {children}
        </MenuContext.Provider>
    );
}

export default Context;
