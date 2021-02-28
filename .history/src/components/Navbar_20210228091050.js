/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Provider>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Provider>
    );
  }
}

export default Navbar;
// class Navbar extends Component {
//   static contextType = ThemeContext;

//   render() {
//     console.log(this.context);
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <nav style={{ background: theme.ui, color: theme.syntax }}>
//         <h1>Context App</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }
