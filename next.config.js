require("dotenv").config({
  path: `environments/.env.${process.env.APP_ENV || "dev"}`
})

module.exports = {
  reactStrictMode: true,
  env: process.env.APP_ENV
}

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: true
      }
    ]
  }
}
