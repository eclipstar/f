export interface IGetDeparments {
  status: number
  data: IDeparment[]
}

export interface IDeparment {
  id: number
  department_name: string
}
