import {useAuthAction} from '@hooks/useAction.hook'
import {AuthNamesEnum} from '@navigation/names.navigation'
import {useNavigation, useRoute} from '@react-navigation/native'
import {AuthStateEnum} from '@slices/auth.slice'
import {useASelector} from '@util/recipies.util'
import {useCallback, useEffect, useState} from 'react'

const useSignUp = () => {
  const action = useAuthAction('signUp')
  const status = useASelector((state) => state.auth.status)
  const {navigate} = useNavigation()
  const props = useParams()
  const toSignIn = useCallback(() => navigate(AuthNamesEnum.SignIn, {...props.params}), [props.params])
  const onPress = () => {
    action(props.params)
  }

  useEffect(() => {
    if (status === AuthStateEnum.Registered) {
      toSignIn()
    }
  }, [status])

  return {...props, toSignIn, onPress, busy: false}
}

const useSignIn = () => {
  const props = useParams()
  const action = useAuthAction('login')
  const onPress = () => {
    action(props.params)
  }

  return {...props, onPress, busy: false}
}

export const AuthHooks = {useSignUp, useSignIn}

const useParams = () => {
  const route = useRoute()
  const [params, setParams] = useState({
    email: '',
    password: '',
    ...route.params,
  })

  const setValue = (key: keyof typeof params) => (value: string) => setParams({...params, [key]: value})

  return {params, setValue}
}
