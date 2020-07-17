const initialState = null

const getId = () => (100000 * Math.random()).toFixed(0)

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFY':
      return {
        content: action.notification,
        id: getId(),
      }
    case 'CLEAR_NOTIFICATION':
      if (action.id !== state.id) return state
      return null
    default:
      return state
  }
}

export const notify = (notification) => {
  return {
    type: 'NOTIFY',
    notification,
  }
}

export const clearNotification = (id) => {
  return {
    type: 'CLEAR_NOTIFICATION',
    id,
  }
}

export default notificationReducer
