import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { IBook } from '../../models'
import { RootState, AppDispatch } from '../../store'
import { historyGoBack } from '../../utilities'
import { fetchGotBookById } from '../../store/actions/services.actions'

import Page from '../../components/Page'

type ParamTypes = {
  id: string
}

export const BookDetailsContainer = () => {
  const { id } = useParams<ParamTypes>()
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { book }: { book: IBook } = useSelector((state: RootState) => state.services)
  const dispatch: AppDispatch = useDispatch()

  // Fetch character details
  useEffect(() => {
    if (id) {
      const promise = dispatch(fetchGotBookById(id))
      return () => promise.abort()
    }
  }, [id, dispatch])

  return React.useMemo(
    () => (
      <Page title={`GOT | Book: ${book.name ? book.name : 'N/A'}`} className="character-details" isLoading={isLoading}>
        <button onClick={e => historyGoBack()}>Back</button>
        <pre>
          <code>{JSON.stringify(book, null, '  ')}</code>
        </pre>
      </Page>
    ),
    [book, isLoading]
  )
}
