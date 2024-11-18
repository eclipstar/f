export interface ICreateUser {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export interface ICreateUserInfo {
  alias: string
  birth_date: string
  gender_id: string
  department_id: string
}

export interface ICreateUserInterests {
  email: string
  interests: string[]
}
