import {
  USER_START,
  USER_SUCCESS,
  USER_ERROR,
} from '../../contants/auth.constant'

import { UserReducerState } from '../../interfaces/entities/user'
import { ActionReducerType } from '../../interfaces/flux'

const initialState: UserReducerState = {
  user: null,
  loadingUser: false,
  errorUser: null,
}

export default function (
  state: UserReducerState = initialState,
  action: ActionReducerType,
) {
  switch (action.type) {
    case USER_START:
      return { ...state, loadingUser: true, user: null, errorUser: null }
    case USER_SUCCESS:
      console.log('action')
      console.log(action)
      return { ...state, user: action.payload, loadingUser: true }
    case USER_ERROR:
      return {
        ...state,
        loadingUser: false,
        user: null,
        errorUser: action.payload,
      }
    default:
      return state
  }
}
