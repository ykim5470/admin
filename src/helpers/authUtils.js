import jwtDecode from 'jwt-decode'
import { Cookies } from 'react-cookie'

/**
 * Checks if user is authenticated
 */
const isUserAuthenticated = () => {
  const user = getLoggedInUser()
  if (!user) {
    return false
  }
  const decoded = jwtDecode(user.token)
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    console.warn('access token expired')
    console.log('access token expired')
    //TODO: test 종료 후 수정할 것. (return true -> false)
    return true
  } else {
    return true
  }
}

/**
 * Returns the logged in user
 */
const getLoggedInUser = () => {
  const cookies = new Cookies()
  const user = cookies.get('user')
  return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null
}

export { isUserAuthenticated, getLoggedInUser }
