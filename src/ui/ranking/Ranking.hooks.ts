import {usePointAction} from '@hooks/useAction.hook'
import {Colors} from '@util/colors.util'
import {useASelector} from '@util/recipies.util'
import {useEffect} from 'react'

const useRanking = () => {
  const getPoints = usePointAction('getRankings')
  const keys = useASelector(state => state.point.keys)

  useEffect(() => {
    getPoints()
  }, [])

  return {keys}
}

const useRankingItem = (id: string, position: number) => {
  const point = useASelector(state => state.point.points[id], [id])
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

  return {point, color}
}

export const RankingHooks = {useRanking, useRankingItem}
