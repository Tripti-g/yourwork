import React, { Component, createContext } from 'react'

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
    state = { isDarkMode: true }
    themeToggle(){
        this.setState({isDarkMode:!this.state.isDarkMode});
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state,toggleTheme: this.themeToggle.bind(this)}} >
                {this.props.children}
            </ThemeContext.Provider >
        )
    }
}