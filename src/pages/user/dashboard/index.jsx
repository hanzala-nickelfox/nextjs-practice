import React from "react"
import { Divider } from "@mui/material"
import { Cookies } from "react-cookie"

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Divider />
    </div>
  )
}

export default Dashboard

export async function getServerSideProps(ctx) {
  const cookie = new Cookies()
  console.log(cookie)
  return {
    props: {}
  }
}
