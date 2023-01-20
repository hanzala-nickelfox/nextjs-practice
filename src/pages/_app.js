import React from "react"
import "../styles/globals.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useRouter } from "next/router"
import { Provider as ReduxProvider } from "react-redux"
import PublicLayout from "@local/layouts/publicLayout"
import PrivateLayout from "@local/layouts/privateLayout"
import { defaultTheme } from "@local/themes/defaultTheme"
import { store } from "@local/redux/store"
import { CookiesProvider } from "react-cookie"

function MyApp({ Component, pageProps }) {
  const currentTheme = createTheme(defaultTheme)
  const path = useRouter()
  console.log("path ", path)
  const isPublic = path.pathname.includes("/auth/")
  const isPrivate = path.pathname.includes("/user/")

  const Wrapper = isPublic
    ? PublicLayout
    : isPrivate
    ? PrivateLayout
    : React.Fragment

  return (
    <CookiesProvider>
      <ReduxProvider store={store}>
        <ThemeProvider theme={currentTheme}>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ThemeProvider>
      </ReduxProvider>
    </CookiesProvider>
  )
}

export default MyApp
