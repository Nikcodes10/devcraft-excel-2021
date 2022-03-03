import React, { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('devcraftUser'))
    const [name, setName] = useState(localStorage.getItem('devcraftName'))
    const [token, setToken] = useState(localStorage.getItem('devcraftToken'))

    const handleUser = (user) => {
        setCurrentUser(user)
        localStorage.setItem('devcraftUser', user)
    }

    const handleToken = (token) => {
        setToken(token)
        localStorage.setItem('devcraftToken', token)
    }

    const handleName = (name) => {
        setName(name)
        localStorage.setItem('devcraftName', name)
    }


    const handleLogout = () => {
        localStorage.removeItem('devcraftUser')
        localStorage.removeItem('devcraftToken')
        localStorage.removeItem('devcraftName')        
    }


    const value = { currentUser, handleUser, handleLogout, handleToken, token, name, handleName }



    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;