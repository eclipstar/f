export interface IGetHomeImg {
  status: number
  data: HomeImage[]
}

export interface HomeImage {
  id: number
  image_file_title: string
  image_file_content: string
  image_file_description: string
  image_file_status: number
  image_file_shows_in: number
}
