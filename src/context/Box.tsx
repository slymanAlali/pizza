/* eslint-disable @typescript-eslint/no-unused-vars */
import {useContext} from 'react'
import {ThemeContext} from "../context/ThemeContext";


const Box = () => {
    const theme = useContext(ThemeContext)
  return (
    <div
        style=
        {{backgroundColor: theme.secondary.main,
        color:theme.primary.text}}
        >
            Theme context
    </div>
  )
}

export default Box