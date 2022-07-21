import { parseCookies, setCookie, destroyCookie } from 'nookies'

export default class Cookies {
  static get(cookieName: string) {
    const cookies = parseCookies()
    return cookies[cookieName] || undefined
  }

  static set(value: string, cookieName: string) {
    const ONE_HOUR = 60 * 60

    setCookie(null, cookieName, value, {
      maxAge: ONE_HOUR,
      path: '/'
    })
  }

  static destroy(cookieName: string) {
    destroyCookie(null, cookieName)
  }
}
