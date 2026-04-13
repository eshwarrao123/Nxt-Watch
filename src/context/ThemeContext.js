import React from 'react'

const ThemeContext = React.createContext({
  isSaved: true,
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideosList: [],
  saveVideoButtonClicked: () => {},
})

export default ThemeContext
