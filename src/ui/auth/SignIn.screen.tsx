import {Button} from '@components/Button.component'
import {CommonStyles as C} from '@components/Common.styles'
import React from 'react'

import {AuthHooks} from './Auth.hooks'
import {AuthStyles as UI} from './Auth.styles'

const SignInScreen: React.FC = () => {
  const {busy, setValue, params, onPress, headerHeight} = useSignIn()
  const {email, password} = params

  return (
    <UI.Container behavior="padding" keyboardVerticalOffset={headerHeight}>
      <C.Empty height={40} />
      <UI.Title>Sign in with your Email and Password</UI.Title>
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
      <C.Flex />
      <Button title="Sign In" type="normal" onPress={onPress} />
      <UI.ActivityIndicator animating={busy} />
    </UI.Container>
  )
}

const {useSignIn} = AuthHooks
export default SignInScreen
