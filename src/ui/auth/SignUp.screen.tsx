import {Button} from '@components/Button.component'
import {CommonStyles as C} from '@components/Common.styles'
import React from 'react'

import {AuthHooks} from './Auth.hooks'
import {AuthStyles as UI} from './Auth.styles'

const SignUpScreen: React.FC = () => {
  const {setValue, params, busy, toSignIn, onPress, headerHeight} = useSignUp()
  const {password, email} = params

  return (
    <UI.Container behavior="padding" keyboardVerticalOffset={headerHeight}>
      <C.Empty height={40} />
      <UI.Title>Enter in a email address and create a password</UI.Title>
      <UI.InputContainer>
        <UI.Input
          editable={!busy}
          onChangeText={setValue('email')}
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Email Address"
          autoCapitalize="none"
        />
      </UI.InputContainer>
      <UI.InputContainer>
        <UI.Input
          editable={!busy}
          onChangeText={setValue('password')}
          value={password}
          textContentType="password"
          autoCapitalize="none"
          placeholder="Password"
          clearTextOnFocus
          secureTextEntry
        />
      </UI.InputContainer>
      <C.Empty height={40} />
      <UI.Row>
        <UI.Text>Already have an account?</UI.Text>
        <UI.TextBtn onPress={toSignIn}>
          <UI.Bold>Sign In</UI.Bold>
        </UI.TextBtn>
      </UI.Row>
      <C.Flex />
      <Button title="Sign Up" type="normal" onPress={onPress} />
      <UI.ActivityIndicator animating={busy} />
    </UI.Container>
  )
}

const {useSignUp} = AuthHooks
export default SignUpScreen
