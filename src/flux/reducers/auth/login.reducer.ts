import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../../../contants/auth.constant'
import { LoginType } from '../../../types/modules/auth'

import {
  ActionReducerType,
  UserLoginReducerState,
} from '../../../interfaces/auth'

const initialState: UserLoginReducerState = {
  user: null,
  loandingLogin: false,
  errorLogin: null,
}

export default function (
  state: UserLoginReducerState = initialState,
  action: ActionReducerType,
) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loandingLogin: true,
        user: null,
        errorLogin: null,
      }
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, loandingLogin: false }
    case LOGIN_ERROR:
      return { ...state, errorLogin: 'ERROR', loandingLogin: false }
    default:
      return state
  }
}
