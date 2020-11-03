import React from 'react'

import {RestaurantHooks} from './Restaurant.hooks'
import {RestaurantStyles as UI} from './Restaurant.styles'

const Restaurant: React.FC = () => {
  const {restaurant, onPress} = useRestaurant()

  if (!restaurant) {
    return null
  }
  const {name, promos} = restaurant

  return (
    <UI.Container>
      <UI.Title>{name}</UI.Title>
      <UI.Subtitle>Press item to redeem points</UI.Subtitle>
      <UI.Rounded>
        {promos.map(p => (
          <UI.Item key={p._id} onPress={onPress(p._id)}>
            <UI.Name>{p.name}</UI.Name>
            <UI.Points>{p.points}</UI.Points>
          </UI.Item>
        ))}
      </UI.Rounded>
    </UI.Container>
  )
}

const {useRestaurant} = RestaurantHooks
export default Restaurant
