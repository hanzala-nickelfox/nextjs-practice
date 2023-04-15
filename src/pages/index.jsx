import { useTheme } from "@emotion/react"
import { MenuOptions } from "@local/constants/publicMenu"
import { useIsLoggedIn } from "@local/hooks/state"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useStyles } from "./indexStyles"

function Index() {
  const styles = useStyles()
  const router = useRouter()
  const isLoggedIn = useIsLoggedIn()
  const theme = useTheme()

  const [btnLabel, setBtnLabel] = useState("Login")

  useEffect(() => {
    const label = isLoggedIn ? "Go to Dashboard" : "Login"
    setBtnLabel(label)
  }, [isLoggedIn])

  const navigate = () => {
    if (isLoggedIn) {
      router.replace("/user/dashboard")
    } else {
      router.push("/auth/login")
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <AppBar component="nav" color="background">
        <Toolbar style={{ padding: "0 3%" }}>
          <Typography
            variant="h3"
            component="div"
            color="primary"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {MenuOptions.map((item) => {
              if (item.title !== "Custom") {
                return (
                  <Link key={item.link} href={item.link} style={{ padding: "5px 20px 5px 0px" }}>
                    {item.title}
                  </Link>
                )
              } else {
                return (
                  <Button key={item.link} variant="outlined" onClick={navigate}>
                    {btnLabel}
                  </Button>
                )
              }
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container sx={styles.main} justifyContent="space-between">
        <Grid container item xs={12} md={6} alignItems="center">
          <Box className="card">
            <Typography variant="h4" color={theme.palette.text.main}>
              Introducing new,
            </Typography>
            <Typography variant="h2" mt={0} sx={{ lineHeight: 1 }} style={{ color: "#c6361c" }}>
              MVVM Architecture.
            </Typography>
            <Grid item xs={12}>
              <Grid container sx={{ mt: 1 }} spacing={1}>
                <Grid item xs="auto">
                  <ArrowRightAltIcon />
                </Grid>
                <Grid item xs>
                  <Typography variant="p2">
                    Welcome to our new landing page! We are excited to introduce you to our latest
                    website template, built on the cutting-edge technology of Next.js and Material
                    UI.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container sx={{ mt: 1 }} spacing={1}>
                <Grid item xs="auto">
                  <ArrowRightAltIcon />
                </Grid>
                <Grid item xs>
                  <Typography variant="p2">
                    Our team has put a lot of thought and effort into creating a template that not
                    only looks great but also delivers exceptional performance and functionality.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ mt: 1 }} spacing={1}>
                <Grid item xs="auto">
                  <ArrowRightAltIcon />
                </Grid>
                <Grid item xs>
                  <Typography variant="p2">
                    We have developed this template using our brand-new MVVM architecture, which
                    stands for Model-View-ViewModel.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ mt: 1 }} spacing={1}>
                <Grid item xs="auto">
                  <ArrowRightAltIcon />
                </Grid>
                <Grid item xs>
                  <Typography variant="p2">
                    <Box fontWeight="fontWeightBold" component="span">
                      Our new architecture
                    </Box>{" "}
                    separates the concerns of the different components of the website, which{" "}
                    <Box fontWeight="fontWeightBold" component="span">
                      makes the code more organized and easier to maintain.
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid container item xs={12} md={5} justifyContent="center" alignItems="center"></Grid>
      </Grid>
      <Grid container item xs={12} md={6} alignItems="center">
        <Box
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255, 1), rgba(255,255,255, 0.3))",
            padding: 25,
            height: "fit-content",
            backdropFilter: "blur(1px)",
            borderRadius: 10
          }}>
          <Grid item xs={12}>
            <Grid container sx={{ mt: 1 }} spacing={1}>
              <Grid item xs="auto">
                <ArrowRightAltIcon />
              </Grid>
              <Grid item xs>
                <Typography variant="p2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </Typography>
              </Grid>
            </Grid>

            <Grid container sx={{ mt: 1 }} spacing={1}>
              <Grid item xs="auto">
                <ArrowRightAltIcon />
              </Grid>
              <Grid item xs>
                <Typography variant="p2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </React.Fragment>
  )
}

export default Index
