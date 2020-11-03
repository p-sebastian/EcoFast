import {SCREEN_WIDTH} from '@util/constants.util'
import {takeColor} from '@util/recipies.util'
import styled from 'styled-components/native'

export const RestaurantStyles = {
  Container: styled.View`
    background-color: ${takeColor('background')};
    padding: 15px;
    border-radius: 15px;
  `,

  Title: styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${takeColor('primary')};
    text-align: center;
    margin-bottom: 10px;
  `,

  Subtitle: styled.Text`
    font-size: 18px;
    color: ${takeColor('white')};
    text-align: center;
    margin-bottom: 30px;
  `,

  Rounded: styled.View`
    border-radius: 15px;
    width: ${SCREEN_WIDTH * 0.75}px;
    overflow: hidden;
  `,

  Item: styled.TouchableOpacity`
    height: 60px;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    border-bottom-width: 2px;
    border-color: ${takeColor('primaryDark')};
    background-color: ${takeColor('backgroundLight')};
  `,

  Name: styled.Text`
    font-size: 18px;
    color: ${takeColor('white')};
    flex: 1;
  `,

  Points: styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${takeColor('primary')};
  `,
}
