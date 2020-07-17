import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVoteTo } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)

  return (
    <div>
      <h3>Anecdotes</h3>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => {
                dispatch(addVoteTo(anecdote.id))
                dispatch(notify(`you voted '${anecdote.content}'`))
              }}
            >vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
