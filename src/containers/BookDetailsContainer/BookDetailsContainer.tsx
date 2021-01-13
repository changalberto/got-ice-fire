import React, { useEffect } from 'react'
import { Params } from 'wouter'
import { useSelector, useDispatch } from 'react-redux'

import { IBook } from '../../models'
import { RootState, AppDispatch } from '../../store'
import { historyGoBack } from '../../utilities'
import { fetchGotBooks } from '../../store/actions/services.actions'

import Page from '../../components/Page'

type BookDetailsProps = {
  params: Params
}

export const BookDetailsContainer = ({ params }: BookDetailsProps) => {
  const { isbn } = params
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const dispatch: AppDispatch = useDispatch()
  // Get book cache list instead of fetching it by the uri since the array is small
  const [book] = useSelector((state: RootState) =>
    state.services.books.results.filter((book: IBook) => book?.isbn === isbn)
  )

  // Fetch books if not available
  useEffect(() => {
    if (!book) {
      const booksPromise = dispatch(fetchGotBooks({ pageSize: 20 }))
      return () => booksPromise.abort()
    }
  }, [book, dispatch])

  return React.useMemo(
    () => (
      <Page title={`GOT | Book: ${book?.name}`} className="book-details" isLoading={isLoading}>
        <button onClick={e => historyGoBack()}>Back</button>
        <pre>
          <code>{JSON.stringify(book, null, '  ')}</code>
        </pre>
      </Page>
    ),
    [book, isLoading]
  )
}
