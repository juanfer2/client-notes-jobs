export type LoginType = {
  username: string
  password: string
}

export type RegisterType = {
  username: string
  name: string
  password: string
  passwordConfirmation: string
}

export type useLoginType = {
  state: LoginType
  handleState: Function
  sendData: Function
  formik: any
}

export type useRegisterType = {
  state: RegisterType
  handleState: Function
  sendData: Function
  formik: any
}
