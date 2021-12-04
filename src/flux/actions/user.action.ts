import {
  USER_START,
  USER_SUCCESS,
  USER_ERROR,
} from '../../contants/auth.constant'

import { logout } from '../../middlewares/authentication.middleware'
import Client from '../../services/graphqlService/graphql.service'
import { ME } from '../../graphql/user/queries'

const startGetUser = () => {
  return { type: USER_START }
}

const successGetUser = (user: any) => {
  return { type: USER_SUCCESS, payload: user }
}

const errorGetUser = (error: any) => {
  return { type: USER_ERROR, payload: error }
}

export const getUser = () => {
  return async (dispatch: any) => {
    try {
      dispatch(startGetUser())
      const response = await Client.query({
        query: ME,
      })
      dispatch(successGetUser(response.data.me))
    } catch (error) {
      console.log(error)
      //logout()
      dispatch(errorGetUser(error))
    }
  }
}
