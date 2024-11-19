export interface Emotion {
  id: number
  emotion: string
  status: number
  icon: any // Agregamos la propiedad 'icon'
}

export interface IGetEmotion {
  status: number
  data: Emotion[]
}

export interface ICreateDailyEmotion {
  emotion: string
}