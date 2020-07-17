import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearNotification } from '../reducers/notificationReducer'

const notificationTime = 5000

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)

  if (!notification) return null
  setTimeout(() => dispatch(clearNotification(notification.id)), notificationTime)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      {notification.content}
    </div>
  )
}

export default Notification
