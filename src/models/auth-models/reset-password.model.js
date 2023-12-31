import { NetworkManager, API } from "@local/network/core"

export const useResetPasswordModel = () => {
  const resetPassword = async (values) => {
    const instance = NetworkManager(API.AUTH.RESETPASSWORD)
    return await instance.request(values)
  }

  return {
    resetPassword
  }
}
