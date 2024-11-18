export interface Sponsor {
  id: number
  sponsor_name: string
  sponsor_image: string
  sponsor_description: string
  status: number
}

export interface IGetSponsor {
  status: number
  data: Sponsor[]
}
