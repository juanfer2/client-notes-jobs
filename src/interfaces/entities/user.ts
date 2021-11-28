export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  authenticationToken?: string
}

export interface UserReducerState {
  user: User | null
  loadingUser: boolean
  errorUser: any
}
