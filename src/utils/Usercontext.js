import { createContext } from "react";

const Usercontext = createContext({
    loggedIn: null,   // Adjusted to match your App state
    setUserName: () => {}  // Default function
});

export default Usercontext;
