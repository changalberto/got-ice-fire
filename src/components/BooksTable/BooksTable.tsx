import React, { FunctionComponent } from 'react'

import { IBook } from '../../models'
import { getBookCoverImageUrl, BookCoverSize } from '../../utilities'

const namespace = 'books-table'

type BooksTableProps = {
  books: IBook[]
}

const Row: FunctionComponent = ({ children }) => <div className={`${namespace}__row`}>{children}</div>

export const BooksTable = ({ books }: BooksTableProps) => {
  return (
    <div className={namespace}>
      {books.map((book: IBook, index: number) => (
        <Row key={book.isbn}>
          <img
            className={`${namespace}__image`}
            src={getBookCoverImageUrl(book.isbn, BookCoverSize.Medium)}
            alt={book.name}
          />
          <span>{book.name}</span>
        </Row>
      ))}
    </div>
  )
}
