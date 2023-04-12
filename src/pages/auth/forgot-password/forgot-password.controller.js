import { useState } from "react"

const useForgotPasswordController = () => {
  const [showLoader, setShowLoader] = useState(false)

  const resetPassword = async (values) => {
    setShowLoader(true)
    // eslint-disable-next-line no-console
    console.log(values)
  }

  return {
    showLoader,
    resetPassword
  }
}

export default useForgotPasswordController
