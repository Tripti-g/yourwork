import React, { Component, createContext } from 'react'

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
    state = { Language: "english" }
    languageChange(e) {
        this.setState({ Language: e.target.value });
    }
    render() {
        return (
            <LanguageContext.Provider value={{ ...this.state, changeLanguage: this.languageChange.bind(this) }} >
                {this.props.children}
            </LanguageContext.Provider >
        )
    }
}

export const withLanguage = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
)