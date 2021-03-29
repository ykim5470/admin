// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { authRequest,cookieSet } from './redux/thunk'
// import {BrwoserRouter,Route,Switch,Link, useLocation } from 'react-router-dom'
// import queryString from 'query-string'

// const Login = () => {
//   const state = useSelector((state) => state)
//   const dispatch = useDispatch()
//   console.log(state.url)

//   const location = useLocation()
//   const query = queryString.parse(location.search)
//   console.log(query)

//   useEffect(() => {
//     dispatch(authRequest())
//   },[])

//   useEffect(()=>{
//     window.location.href = state.url
//   },[])

//   return <div></div>
// }

// export default Login
