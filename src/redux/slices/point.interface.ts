export type TRecycleRequest = {
  sub: string
  amount: number
  location: string
}

export type TPoint = {
  _id: string // userId
  total: number
  location: string
  user: {
    email: string
  }
}
