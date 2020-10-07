import {useRoute} from '@react-navigation/native'
import {useState} from 'react'

const useSignUp = () => {
  const props = useParams()

  return {...props, busy: false}
}

export const AuthHooks = {useSignUp}

const useParams = () => {
  const route = useRoute()
  const [params, setParams] = useState({
    email: '',
    password: '',
    ...route.params,
  })

  const setValue = (key: keyof typeof params) => (value: string) =>
    setParams({...params, [key]: value})

  return {params, setValue}
}
