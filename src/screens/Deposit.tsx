import { ThemeProvider } from "styled-components";
import { Blur } from "../components/Blur";
import GlobalStyle from '../styles/global'
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

export function Deposit() {
  return (
    <>
      <ThemeProvider theme={light}>
          <Blur />
        <GlobalStyle />
        <div>
          <h1>Deposit</h1>
        </div>
      </ThemeProvider>
    </>
  )
}
