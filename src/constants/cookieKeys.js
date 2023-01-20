import { Dates } from "@local/helpers/app-dates/dates"
import Router from "next/router"

export const CookieKeys = {
  Auth: "Auth-Token"
}

export const CookieOptions = {
  expires: Dates().addInCurrent(10, "days")._d,
  sameSite: "strict",
  path: "/"
}
