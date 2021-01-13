import React from 'react'
import { Helmet } from 'react-helmet-async'
import cn from 'classnames'

import Loader from '../Loader'

type PageProps = {
  title?: string
  children: any
  isLoading?: boolean
  className?: string
}

export const Page = ({ title, children, isLoading, className }: PageProps) => {
  return (
    <div className={cn('page', { [`${className}`]: className })}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          {children}
        </>
      )}
    </div>
  )
}
