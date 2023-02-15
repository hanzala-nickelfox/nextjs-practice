require("dotenv").config({
  path: `env/.env.${process.env.APP_ENV || "dev"}`
})

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  }
}

// module.exports = {
//   async redirects() { // redirect internal
//     return [
//       {
//         source: "/",
//         destination: "/auth/login",
//         permanent: true
//       }
//     ]
//   }
// }
