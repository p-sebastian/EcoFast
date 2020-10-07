import {Colors} from '@util/colors.util'
import {extractFn, extractProp, takeColor} from '@util/recipies.util'
import React from 'react'
import {TouchableOpacityProps} from 'react-native'
import styled from 'styled-components/native'

type TTypes = 'clear' | 'normal' | 'dark' | 'light'
type Styling = {background?: string; mHorizontal?: number; mVertical?: number}
type Props = {
  title: string
  color?: string
  type?: TTypes
} & TouchableOpacityProps &
  Styling
export const Button: React.FC<Props> = ({
  title,
  type = 'normal',
  background,
  color,
  ...props
}) => {
  switch (type) {
    case 'clear':
      return (
        <ClearButton {...props}>
          <BtnText color={Colors.primaryDark}>{title}</BtnText>
        </ClearButton>
      )
    case 'dark':
      return (
        <DarkButton {...props}>
          <BtnText color={Colors.white}>{title}</BtnText>
        </DarkButton>
      )
    case 'normal':
      return (
        <Btn {...props} background={background}>
          <BtnText color={Colors.white}>{title}</BtnText>
        </Btn>
      )
    case 'light':
      return (
        <LightButton {...props}>
          <BtnText color={Colors.triadicPurple}>{title}</BtnText>
        </LightButton>
      )
  }
}

const ClearButton = styled.TouchableOpacity<Styling>`
  min-height: 50px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: 10px 15px;
  border-radius: 12px;
  margin-horizontal: ${extractProp('mHorizontal', 0)}px;
  margin-vertical: ${extractProp('mVertical', 0)}px;
  opacity: ${extractFn('disabled', (d) => (d ? 0.3 : 1))};
  border-width: 1px;
  border-color: ${takeColor('primaryDark')};
`

const DarkButton = styled.TouchableOpacity<Styling>`
  min-height: 50px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: 10px 15px;
  border-radius: 12px;
  margin-horizontal: ${extractProp('mHorizontal', 0)}px;
  margin-vertical: ${extractProp('mVertical', 0)}px;
  border-width: 1px;
  border-color: ${takeColor('background')};
  background-color: ${takeColor('background')};
  opacity: ${extractFn('disabled', (d) => (d ? 0.3 : 1))};
`

const LightButton = styled.TouchableOpacity<Styling>`
  min-height: 50px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: 10px 15px;
  border-radius: 12px;
  margin-horizontal: ${extractProp('mHorizontal', 0)}px;
  margin-vertical: ${extractProp('mVertical', 0)}px;
  background-color: ${takeColor('primary')};
  border-width: 1px;
  border-color: ${takeColor('triadicPurple')};
  opacity: ${extractFn('disabled', (d) => (d ? 0.3 : 1))};
`

const Btn = styled.TouchableOpacity<Styling>`
  min-height: 50px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: 10px 15px;
  border-radius: 12px;
  background-color: ${extractProp('background', Colors.primary)};
  margin-horizontal: ${extractProp('mHorizontal', 0)}px;
  margin-vertical: ${extractProp('mVertical', 0)}px;
  opacity: ${extractFn('disabled', (d) => (d ? 0.3 : 1))};
`
const BtnText = styled.Text<{color?: string}>`
  color: ${extractProp('color', Colors.primaryLight)};
  font-size: 16px;
`
