export type TRestaurant = {
  _id: string
  name: string
  promos: TPromo[]
}

export type TPromo = {
  name: string
  _id: string
  points: number
}
