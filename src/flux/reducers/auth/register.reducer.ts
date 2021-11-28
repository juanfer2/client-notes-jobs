import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../../../contants/auth.constant'

import { ActionReducerType, UserReducerState } from '../../../interfaces/auth'

const initialState: UserReducerState = {
  user: null,
  loandingRegister: false,
  errorRegister: null,
}

export default function (
  state: UserReducerState = initialState,
  action: ActionReducerType,
) {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        loandingRegister: true,
        user: null,
        errorRegister: null,
      }
    case REGISTER_SUCCESS:
      return { ...state, user: action.payload, loandingRegister: false }
    case REGISTER_ERROR:
      return { ...state, errorRegister: 'ERROR', loandingRegister: false }
    default:
      return state
  }
}
