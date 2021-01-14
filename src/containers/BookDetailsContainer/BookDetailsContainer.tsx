import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Breadcrumbs, IconButton, Paper } from '@material-ui/core'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { format } from 'date-fns'

import { IBook } from '../../models'
import { RootState, AppDispatch } from '../../store'
import { servicesSlice } from '../../store/reducers/services.reducer'
import {
  BookCoverSize,
  getBookCoverImageUrl,
  historyGoBack,
  isArrayEmptyOrNull,
  isStringEmptyOrNull,
} from '../../utilities'
import { linksCrawl } from '../../helpers/LinkCrawl'
import { fetchGotBookById } from '../../store/actions/services.actions'

import Page from '../../components/Page'

import './book-details.scss'

type ParamTypes = {
  id: string
}

export const BookDetailsContainer = () => {
  const { id } = useParams<ParamTypes>()
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { book }: { book: IBook } = useSelector((state: RootState) => state.services)
  const dispatch: AppDispatch = useDispatch()
  const { resetBookState } = servicesSlice.actions

  // Fetch character details
  useEffect(() => {
    if (id) {
      const promise = dispatch(fetchGotBookById(id))
      return () => {
        promise.abort()
        dispatch(resetBookState())
      }
    }
  }, [id, dispatch, resetBookState])

  return React.useMemo(
    () => (
      <Page title={`GOT | Book: ${book.name ? book.name : 'N/A'}`} className="book-details" isLoading={isLoading}>
        <Breadcrumbs>
          <IconButton onClick={e => historyGoBack()}>
            <IoMdArrowRoundBack />
          </IconButton>
          <h3>{book.name ? book.name : 'N/A'}</h3>
        </Breadcrumbs>
        <Paper elevation={2}>
          <div className="inset-padding">
            <div className="paper-container">
              <h2>{book.name ? book.name : 'N/A'}</h2>
            </div>
            <div className="paper-container">
              <div className="book-cover">
                <img src={getBookCoverImageUrl(book.isbn, BookCoverSize.Medium)} alt={book.name} />
              </div>
              <div className="book-info">
                <h3>Book Details</h3>
                <p>
                  <b>ISBN:</b> {book.isbn}
                </p>
                <p>
                  <b>{book.mediaType}:</b> {book.numberOfPages}
                </p>
                <p>
                  <b>Authors:</b> {book?.authors && book?.authors.join(', ')}
                </p>
                <p>
                  <b>Publisher:</b> {book.publisher}
                </p>
                <p>
                  <b>Country:</b> {book.country}
                </p>

                <p>
                  <b>Released:</b>
                  {!isStringEmptyOrNull(book.released) ? format(new Date(book.released), 'MMMM dd, yyyy') : 'N/A'}
                </p>
              </div>
              <div className="characters">
                <h3>Characters</h3>
                <div className="list">
                  {!isArrayEmptyOrNull(book.characters) ? linksCrawl(book.characters, 'character', 'name') : 'N/A'}
                </div>
              </div>
              <div className="characters">
                <h3>POV Characters</h3>
                <div className="list">
                  {!isArrayEmptyOrNull(book.povCharacters)
                    ? linksCrawl(book.povCharacters, 'character', 'name')
                    : 'N/A'}
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Page>
    ),
    [book, isLoading]
  )
}
