import {usePointAction, useRestaurantAction} from '@hooks/useAction.hook'
import {Colors} from '@util/colors.util'
import {logger} from '@util/logger.util'
import {useASelector} from '@util/recipies.util'
import {useCallback, useEffect, useState} from 'react'
import {Event} from 'react-native-qrcode-scanner'

const useRanking = () => {
  const getPoints = usePointAction('getRankings')
  const keys = useASelector(state => state.point.keys)

  useEffect(() => {
    getPoints()
  }, [])

  return {keys}
}

const useQR = () => {
  const open = useASelector(state => state.point.qrOpen)
  const getRestaurant = useRestaurantAction('getRestaurant')
  const toggle = usePointAction('toggleQr')
  const [showPromos, setShowPromos] = useState(false)
  const close = useCallback(() => {
    toggle(false)
    setShowPromos(false)
  }, [])

  const onSuccess = useCallback((url: Event) => {
    logger.info(url.data)
    getRestaurant(url.data)
    setShowPromos(true)
  }, [])

  useEffect(() => {
    if (!open && showPromos) {
      setShowPromos(false)
    }
  }, [open])

  return {open, close, onSuccess, showPromos}
}

const useRankingItem = (id: string, position: number) => {
  const email = useASelector(state => state.auth.email)
  const point = useASelector(state => state.point.points[id], [id])
  const me = email === point.user.email
  let color = Colors.primaryLight
  if (position === 0) {
    color = Colors.gold
  }
  if (position === 1) {
    color = Colors.silver
  }
  if (position === 2) {
    color = Colors.bronze
  }

  return {point, color, me}
}

export const RankingHooks = {useRanking, useRankingItem, useQR}
