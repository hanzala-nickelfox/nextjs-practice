import React from "react"
import { Divider } from "@mui/material"
import Head from "next/head"
import getServerSideProps from "./dashboard.server"
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

export { getServerSideProps }
