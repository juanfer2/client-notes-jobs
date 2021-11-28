import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_SUCCESS
} from '../../../contants/auth.constant'

import { LoginType } from '../../../types/modules/auth'
import { setSession } from '../../../middlewares/authentication.middleware'

import Client from '../../../services/graphqlService/graphql.service'
import { LOGIN_USER } from '../../../graphql/auth/queries'

const startLogin = () => {
  return { type: LOGIN_START }
}

const successLogin = () => {
  return { type: LOGIN_SUCCESS }
}

const errorLogin = () => {
  return { type: LOGIN_ERROR }
}

const getUser = (user: any) => {
  return { type: USER_SUCCESS, payload: user }
}

export const loginUser = (data: LoginType) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLogin())
      console.log('start Login')
      console.log(data)
      const response = await Client.query({
        variables: data,
        query: LOGIN_USER,
      })
      console.log('response')
      console.log(response.data.login)
      setSession(response.data.login)
      dispatch(getUser(response.data.login))
      dispatch(successLogin())
    } catch (error) {
      console.log(error)
      dispatch(errorLogin())
    }
  }
}
