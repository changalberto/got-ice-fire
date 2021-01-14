import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { gotApi } from '../../services/gotApi.service'
import { getStringValueOrNa } from '../../utilities'

import './link-crawl.scss'

type LinkCrawlProps = {
  uri: string
  href: string
  labelByProp: string
}
export const LinkCrawl = ({ uri, href, labelByProp }: LinkCrawlProps) => {
  const [label, setLabel] = useState(null)

  useEffect(() => {
    const source = axios.CancelToken.source()
    gotApi
      .getDataByUri(uri, { cancelToken: source.token })
      .then(({ data }) => {
        setLabel(data[labelByProp] ?? '')
      })
      .catch(err => {
        // Catch Error
      })
    return () => source.cancel()
  }, [uri, labelByProp])

  return React.useMemo(
    () => (
      <span className="link-crawl">
        <Link className="link" to={href}>
          {getStringValueOrNa(label)}
        </Link>
      </span>
    ),
    [href, label]
  )
}
