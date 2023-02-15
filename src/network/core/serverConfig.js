export const APIConfig = {
  API_URL: process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL,
  TIMEOUT: 15000,
  API_AUTH_HEADER: "Authorization",
  AUTH_TYPE: "Bearer",
  CONTENT_TYPE: {
    JSON: "application/json",
    MULTIPART: "multipart/form-data"
  }
}
