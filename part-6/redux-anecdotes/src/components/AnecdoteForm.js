import React from 'react'
import { connect } from 'react-redux'
import { addNew } from './../reducers/anecdoteReducer'
import { createMessage } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.create.value
    e.target.create.value = ''
    props.addNew(content)
    props.createMessage(`new anecdote ${content}`, 5)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='create' />
        </div>
        <button>create</button>
      </form>
    </>
  )
}
const mapDispatchToProps = {
  addNew,
  createMessage,
}
const ConnectedAnecdote = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdote
