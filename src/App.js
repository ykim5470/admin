import React, { useEffect } from 'react'
import Login from './Login'
import { isUserAuthenticated, getLoggedInUser } from './helpers/authUtils'
import { createUrl, createAccessTokenUrl } from './helpers/modules'
import Axios from 'axios'
import { Cookies } from 'react-cookie'
import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Link,
  useLocation,
} from 'react-router-dom'
import { authRequest, tokenAuth } from './redux/thunk'
import queryString from 'query-string'

// let ssoAuthRequest = () => {
//   return(
//    createUrl('localhost:3000').then(async (url) =>
//   {
//     const redirect = await Axios.get(url)
//     return redirect
//   }))}

// console.log(ssoAuthRequest())

// let authToken = async() => {
//   const userInfo = await Axios.get(createAccessTokenUrl())
//   return userInfo
// }

// console.log(authToken())

const Dashboard = (props) => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const location = useLocation()
  const query = queryString.parse(location.search)

  useEffect(() => {
    if (state.query_string === null) {
      dispatch(authRequest())
      if ((query.code !== null) & (query.user_id !== null)) {
        const cookies = new Cookies()
        cookies.set('code', query.code)
        cookies.set('user_id', query.user_id)
        let obj = { code: query.code, user_id: query.user_id }
        dispatch({ type: 'QUERY_SET_SUCCESS', payload: obj })
      }
      dispatch(tokenAuth())
    }
    return null
  }, [state])

  if (!state.auth) {
    return (
      <div>
        <a href={state.url}>click</a>
      </div>
    )
  }
  return <div>Dashboard</div>
}

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
