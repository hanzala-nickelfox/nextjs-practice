import { useState } from "react"
import { CookieKeys, CookieOptions } from "@local/constants/cookieKeys"
import { useCookies } from "react-cookie"
import { useLoginModel } from "./login.model"

const useLoginController = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const [cookies, setCookie] = useCookies(["auth-token"])

  const model = useLoginModel()

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const userLogin = async (values) => {
    setShowLoader(true)
    const response = await model.loginByEmail(values)
    setShowLoader(false)
    if (response.success) {
      setCookie(CookieKeys.Auth, response.data.token, CookieOptions)
    } else {
      // TODO: show error toast
    }
  }

  return {
    showPassword,
    showLoader,
    cookies,
    togglePasswordVisibility,
    userLogin
  }
}

export default useLoginController
