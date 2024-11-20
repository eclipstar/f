export interface IGetPeriodDays {
  data: Period[]
}

export interface Period {
  id: number
  start_date: Date
  end_date: Date
  user_id: number
  created_at: Date
  updated_at: Date
  deleted_at: null
}
