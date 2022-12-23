import { axiosPublic } from "@api/axios-public"
import axios from "axios"
import jwt_decode from 'jwt-decode'

const userService = {
  register(email: string, password: string) {

    axiosPublic.post("/users/register", {
      email,
      password
    })
      .then((response) => {
        const user = response.data
        localStorage.setItem("user", JSON.stringify(user))
        return user
      })
      .catch((error) => {

        if (error.response) {
          console.log(error, "response error")
        } else if (error.request) {
          console.log(error, "request error")
        } else {
          console.log(error, "unknown error")
        }
      })
    return null
  },

  login(email: string, password: string) {

    axiosPublic.post("/users/login", {
      email,
      password
    })
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token))
        const user = jwt_decode(response.data.token)
        localStorage.setItem("user", JSON.stringify(user))
        return user
      })
      .catch((error) => {
        if (error.response) {
          console.log(error, "response error")
        } else if (error.request) {
          console.log(error, "request error")
        } else {
          console.log(error, "unknown error")
        }
      })
    return null
  }
}

export default userService