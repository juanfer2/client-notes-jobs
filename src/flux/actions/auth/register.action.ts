import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../../../contants/auth.constant'

import Client from '../../../services/graphqlService/graphql.service'
import { RegisterType } from '../../../types/modules/auth'
import { REGISTER_USER } from '../../../graphql/auth/mutations'

const startRegister = () => {
  return { type: REGISTER_START }
}

const successRegister = () => {
  return { type: REGISTER_SUCCESS }
}

const errorRegister = () => {
  return { type: REGISTER_ERROR }
}

export const RegisterUser = (data: RegisterType) => {
  return async (dispatch: any) => {
    try {
      dispatch(startRegister())

      const response = await Client.mutate({
        variables: data,
        mutation: REGISTER_USER,
      })

      dispatch(successRegister())
    } catch (error) {
      console.log(error)
      dispatch(errorRegister())
    }
  }
}
