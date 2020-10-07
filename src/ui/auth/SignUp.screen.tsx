import React from 'react'

import {AuthHooks} from './Auth.hooks'
import {AuthStyles as UI} from './Auth.styles'

const SignUpScreen: React.FC = () => {
  const {setValue, params, busy} = useSignUp()
  const {password, email} = params

  return (
    <UI.Container>
      <UI.Subtitle>Enter in a email address and create a password</UI.Subtitle>
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
      <UI.Row>
        <UI.Text>Already have an account?</UI.Text>
        <UI.TextBtn>
          <UI.Bold>Sign In</UI.Bold>
        </UI.TextBtn>
      </UI.Row>
      <UI.ActivityIndicator animating={busy} />
    </UI.Container>
  )
}

const {useSignUp} = AuthHooks
export default SignUpScreen
