import Axios from 'axios'
import { createUrl, createAccessTokenUrl } from '../helpers/modules'
import { Cookies } from 'react-cookie'
import { queryString } from 'query-string'
import { useLocation } from 'react-router-dom'

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_POSTS_REQUEST' })
  try {
    const response = await Axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    )

    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data })
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', error })
  }
}

export const authRequest = () => async (dispatch, getState) => {
  dispatch({ type: 'AUTH_URL_REQUEST' })
  try {
    let response = await createUrl('localhost:3000').then(async (url) => {
      const redirect = await Axios.get(url)
      return redirect.config.url
    })
    dispatch({ type: 'AUTH_URL_SUCCESS', payload: response })
  } catch (error) {
    dispatch({ type: 'AUTH_RUL_FAILURE', error })
  }
}

export const querySet = () => async (dispatch, getState) => {
  dispatch({ type: 'QUERY_SET_REQUEST' })
  try {
  } catch (error) {
    dispatch({ type: 'QUERY_SET_FAILURE', error })
  }
}

export const tokenAuth = () => async (dispatch, getState) => {
  dispatch({ type: 'TOKEN_AUTH_REQUEST' })
  try {
    let response = await Axios.get(createAccessTokenUrl())
    dispatch({
      type: 'TOKEN_AUTH_SUCCESS',
      payload: response.data.access_token,
    })
  } catch (error) {
    dispatch({ type: 'TOKEN_AUTH_FAILURE', error })
  }
}
