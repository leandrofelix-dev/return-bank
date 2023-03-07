import { ThemeProvider } from "styled-components";
import { Blur } from "../components/Blur";
import GlobalStyle from '../styles/global'
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

export function Transfer() {
  return (
    <>
      <ThemeProvider theme={light}>
          <Blur />
        <GlobalStyle />
        <div>
          <h1>Transfer</h1>
        </div>
      </ThemeProvider>
    </>
  )
}
