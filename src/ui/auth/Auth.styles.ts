import {Colors} from '@util/colors.util'
import {takeColor} from '@util/recipies.util'
import styled from 'styled-components/native'

export const AuthStyles = {
  Container: styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    padding: 20px;
    background-color: ${takeColor('background')};
  `,

  Title: styled.Text`
    font-size: 20px;
    color: ${takeColor('white')};
    width: 80%;
    text-align: center;
    margin-bottom: 20px;
  `,

  Subtitle: styled.Text`
    font-size: 15px;
    color: ${takeColor('white')};
    margin-bottom: 25px;
    margin-top: 10px;
    align-self: flex-start;
  `,

  InputContainer: styled.View`
    align-self: stretch;
    background-color: ${takeColor('backgroundLight')};
    height: 50px;
    margin-bottom: 10px;
    border-radius: 9px;
    padding: 0 20px;
    justify-content: center;
  `,

  Input: styled.TextInput.attrs({
    placeholderTextColor: Colors.white,
  })`
    flex: 1;
    color: ${takeColor('white')};
    font-size: 17px;
  `,

  Info: styled.Text`
    font-size: 12px;
  `,

  TextBtn: styled.TouchableOpacity``,

  Text: styled.Text`
    font-size: 13px;
    margin-left: 5px;
    color: ${takeColor('white')};
  `,

  Bold: styled.Text`
    font-size: 13px;
    margin-left: 2px;
    color: ${takeColor('primary')};
  `,

  Warning: styled.Text`
    font-size: 11px;
  `,

  ActivityIndicator: styled.ActivityIndicator.attrs((_p) => ({
    hidesWhenStopped: true,
    size: 'small',
  }))`
    margin: 20px;
  `,

  Row: styled.View`
    flex-direction: row;
  `,
}
