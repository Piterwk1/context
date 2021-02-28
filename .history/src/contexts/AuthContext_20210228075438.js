import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isAuthenticated: false
     }
     toogleAuth = () => {
         this.setState({
             isAuthenticated: !this.state.isAuthenticated
         })
     }
    render() { 
        return (  );
    }
}
 
export default AuthContextProvider;
