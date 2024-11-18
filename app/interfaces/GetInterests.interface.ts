export interface IGetInterests {
  status: number
  data: Interest[]
}

export interface Interest {
  id: number
  interest: string
  status: number
}
