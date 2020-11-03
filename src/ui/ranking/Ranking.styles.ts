import {BlurView} from '@react-native-community/blur'
import {Colors} from '@util/colors.util'
import {extractFn, takeColor} from '@util/recipies.util'
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'

export const RankingStyles = {
  Container: styled.View`
    flex: 1;
    background-color: ${takeColor('background')};
  `,

  Item: styled.TouchableOpacity<{even: boolean; me: boolean}>`
    height: 60px;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    border-left-width: ${extractFn<{even: boolean}>('even', e => (e ? 5 : 0))}px;
    padding-left: ${extractFn<{even: boolean}>('even', e => (e ? 10 : 15))}px;
    border-bottom-width: 2px;
    border-bottom-color: ${takeColor('backgroundLight')};
    border-color: ${takeColor('primary')};
    background-color: ${extractFn<{me: boolean}>('me', m => (m ? Colors.backgroundDark : Colors.background))};
  `,

  Title: styled.Text`
    font-size: 16px;
    margin-left: 10px;
    color: ${takeColor('white')};
    flex: 1;
  `,

  Amount: styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${takeColor('primary')};
  `,

  Medal: styled(Icon).attrs({name: 'medal-outline', size: 30})``,

  QRBox: styled(BlurView).attrs({blurType: 'dark'})`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    justify-content: center;
    align-items: center;
  `,

  Dismiss: styled.TouchableWithoutFeedback``,
}
