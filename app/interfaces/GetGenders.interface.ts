export interface IGetGender {
  status: number
  data: IGender[]
}

export interface IGender {
  id: number
  gender: string
}
