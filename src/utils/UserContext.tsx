import { createContext } from "react";

export const UserContext = createContext({
    user: { name: "Guest", email: "loggedin@example.com" },
    setUser: (user: { name: string; email: string }) => { }
});
