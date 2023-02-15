import { MenuOptions } from "@local/constants/publicMenu"
import { useIsLoggedIn } from "@local/hooks/state"
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useStyles } from "./indexStyles"

function Index() {
  const styles = useStyles()
  const router = useRouter()
  const isLoggedIn = useIsLoggedIn()

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
        <Toolbar>
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
                    {isLoggedIn ? "Go to Dashboard" : "Login"}
                  </Button>
                )
              }
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} sx={styles.main}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={7}>
              <Grid item xs={12}>
                <Grid item xs={12}>
                  <Typography variant="h4" mt={1}>
                    Lorem Ipsum
                  </Typography>
                  <Typography variant="p2">
                    In dictum non consectetur a erat nam at. Tellus at urna condimentum mattis
                    pellentesque id. At urna condimentum mattis pellentesque id nibh. Tempor orci eu
                    lobortis elementum nibh tellus. Parturient montes nascetur ridiculus mus mauris
                    vitae ultricies.
                  </Typography>
                </Grid>
                <Grid item xs={12} m={4}>
                  <Grid container justifyContent="space-evenly">
                    <Button variant="outlined" size="large">
                      Try Now
                    </Button>
                    <Button variant="outlined" size="large" color="secondary">
                      Know More
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4">Lorem Ipsum</Typography>
                  <Typography variant="p2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus
                    gravida quis blandit turpis cursus. Dignissim diam quis enim lobortis
                    scelerisque fermentum dui faucibus in. Sagittis vitae et leo duis ut diam quam
                    nulla porttitor. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.
                    Purus sit amet volutpat consequat mauris. Massa enim nec dui nunc mattis enim ut
                    tellus elementum. Condimentum mattis pellentesque id nibh tortor id aliquet.
                    Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Etiam sit amet nisl
                    purus in mollis. Sed augue lacus viverra vitae congue.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid container justifyContent="center" p={4}>
                <Image alt="template" src={"/images/icons/mockup.png"} height={256} width={256} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Index
