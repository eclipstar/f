export interface IGetTip {
  status: number
  data: Tip
  message: string
}

export interface Tip {
  id: number
  tip_description: string
  symptom_id: number
  status: number
}

export interface IGetSintoms {
  status: number
  data: Sintom[]
}

export interface Sintom {
  id: number
  symptom: string
  status: number
  icon?: number
}
