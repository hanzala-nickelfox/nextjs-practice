import React from "react"
import { Divider } from "@mui/material"
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

export async function getServerSideProps() {
  return {
    props: {}
  }
}
