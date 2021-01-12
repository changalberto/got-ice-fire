import React, { useEffect } from 'react'
import { Params } from 'wouter'
import { useSelector, useDispatch } from 'react-redux'

import { IBook } from '../../models'
import { RootState, AppDispatch } from '../../store'
import { fetchGotBooks } from '../../store/actions/services.actions'

type BookDetailsProps = {
  params: Params
}

export const BookDetailsContainer = ({ params }: BookDetailsProps) => {
  const { isbn } = params
  const dispatch: AppDispatch = useDispatch()
  // Get book cache list instead of fetching it by the uri since the array is small
  const [book] = useSelector((state: RootState) =>
    state.services.books.results.filter((book: IBook) => book?.isbn === isbn)
  )

  console.log('bookDetails', book)

  // Fetch books if not available
  useEffect(() => {
    if (!book) {
      const booksPromise = dispatch(fetchGotBooks({ pageSize: 20 }))
      return () => booksPromise.abort()
    }
  }, [book, dispatch])

  useEffect(() => {
    // if (book) {
    //   book.characters.map()
    // }
  }, [book])

  return book ? (
    <div className="book">
      {book.characters.map(uri => (
        <div key={uri}>{uri}</div>
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  )
}
