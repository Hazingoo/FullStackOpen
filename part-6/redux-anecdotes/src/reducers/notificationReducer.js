const initialState = null
const id = []
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MESSAGE':
      return action.data.content
    case 'DEFAULT':
      return initialState
    default:
      return state
  }
}

export const createMessage = (content, timeout) => {
  return async (dispatch) => {
    if (id.length) window.clearTimeout(id.pop())
    const time = setTimeout(() => {
      dispatch({
        type: 'DEFAULT',
      })
    }, timeout * 1000)
    id.push(time)
    dispatch({
      type: 'CREATE_MESSAGE',
      data: {
        content,
      },
    })
  }
}

export default notificationReducer
