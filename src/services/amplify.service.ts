import {AuthSignInPayload} from '@slices/auth.interface'
import {TUser} from '@type/TUser'
import {ErrorCode} from '@util/error.util'
import {Auth} from 'aws-amplify'

export class AmplifyService {
  private static instance: AmplifyService
  private _attributes: TUser | null = null
  private _identityId: string | null = null
  private constructor() {}

  private async identityId() {
    if (!this._identityId) {
      // identityId is a 'Federated Identity', not the userId ie: sub
      const {identityId} = await this.wrapper(Auth.currentCredentials.bind(Auth), ErrorCode.AuthCurrentCredentials)
      this._identityId = identityId
    }

    return this._identityId
  }
  private async userAttributes(reload = false): Promise<TUser | null> {
    if (this._attributes && !reload) {
      return this._attributes
    }
    return this.currentAuthenticatedUser()
  }

  private async wrapper<T>(promise: () => Promise<T>, operation_code: number): Promise<T> {
    try {
      return await promise()
    } catch (e) {
      let message: string | null = null
      let error_code: string | null = null
      if (e && e.message) {
        message = e.message
      } else {
        message = e.constructor.name
      }
      if (e && e.code && typeof e.code === 'string') {
        error_code = e.code
      }
      console.log(
        'Auth Exception!',
        e,
        typeof e,
        operation_code,
        e.constructor.name,
        Object.keys(Object.getPrototypeOf(e)),
        JSON.stringify(e),
      )
      throw new Error(`Error: op: ${operation_code}; code: ${error_code ?? 'UNKNOWN'}; message: ${message}`)
    }
  }

  static getInstance(): AmplifyService {
    if (!AmplifyService.instance) {
      AmplifyService.instance = new AmplifyService()
    }

    return AmplifyService.instance
  }

  currentAuthenticatedUser = async (): Promise<TUser | null> => {
    const getCurrentUserInfo = Auth.currentAuthenticatedUser.bind(Auth)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const currentUserInfo = await this.wrapper(getCurrentUserInfo, ErrorCode.AuthCurrentAuthenticatedUser)
    return currentUserInfo
  }

  async logout(): Promise<void> {
    try {
      await Auth.signOut()
    } catch (e) {
      // dont error on signout
    }
  }

  signUp = async ({password, email}: AuthSignInPayload): Promise<void> => {
    const bound = Auth.signUp.bind(Auth, {
      username: email.toLocaleLowerCase(),
      password, // Do not lowercase the password
    })
    await this.wrapper(bound, ErrorCode.AuthSignUp)
  }

  signIn = async ({password, email}: AuthSignInPayload) => {
    const bound = Auth.signIn.bind(Auth, {
      username: email.toLocaleLowerCase(),
      password, // Do not lowercase the password
    })
    await this.wrapper(bound, ErrorCode.AuthSignIn)
    const bound2 = this.userAttributes.bind(this)
    return await this.wrapper(bound2, ErrorCode.AuthUserAttributes)
  }

  forgotPassword = async (username: string) => {
    try {
      const bound = Auth.forgotPassword.bind(Auth, username.toLocaleLowerCase())
      await this.wrapper(bound, ErrorCode.AuthForgot)
    } catch (e) {
      console.log('Reject: forgotPassword failed', e)
      return Promise.reject(e)
    }
    return
  }

  forgotPasswordSubmit = async (username: string, code: string, password: string) => {
    try {
      const bound = Auth.forgotPasswordSubmit.bind(Auth, username.toLocaleLowerCase(), code, password)
      await this.wrapper(bound, ErrorCode.AuthForgot)
    } catch (e) {
      console.log('forgotPasswordSubmit Failed', e)
      return Promise.reject(e)
    }
    return
  }
}
