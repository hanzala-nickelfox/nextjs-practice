import React from "react"
import { Divider } from "@mui/material"
import { Cookies } from "react-cookie"
import Head from "next/head"

function Dashboard() {
  return (
    <React.Fragment>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>
        <h2>Dashboard</h2>
        <Divider />
      </div>
    </React.Fragment>
  )
}

export default Dashboard

export async function getServerSideProps(ctx) {
  const cookie = new Cookies()
  // console.log(cookie)
  return {
    props: {}
  }
}
