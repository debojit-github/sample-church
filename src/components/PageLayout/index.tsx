import React from "react"
import './index.css';
import { ThemeProvider } from "styled-components"
import { theme } from "../../common/theme/defaultTheme"
import { MainLayout } from "./styled"

const PageLayout: React.FunctionComponent<{
  children: React.ReactNode
}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MainLayout>{children}</MainLayout>
  </ThemeProvider>
)

export default PageLayout
