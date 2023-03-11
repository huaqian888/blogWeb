import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const createAxios = (config?: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    url: import.meta.env.VITE_APP__BASE_URL,
    timeout: import.meta.env.VITE_APP_TIME_OUT,
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    ...config
  })

  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (err) => {
      Promise.reject(err)
    }
  )

  instance.interceptors.response.use(
    (res) => {
      const { message, code, data } = res.data
      if (Number(code) >= 200 && Number(code) <= 299) {
        return data
      }
      return Promise.reject(res.data)
    },
    (err) => {
      Promise.reject(err)
    }
  )
  return instance
}
