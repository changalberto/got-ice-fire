import { isArrayEmptyOrNull, getLastPathnameFromUrl, isStringEmptyOrNull } from '../utilities'

import { LinkCrawl } from '../modules/LinksList'

export const linkCrawlHelper = (uri: string, baseHref: string, labelByProp: string) => {
  return (
    !isStringEmptyOrNull(uri) && (
      <LinkCrawl uri={uri} href={`/${baseHref}/${getLastPathnameFromUrl(uri)}`} labelByProp={labelByProp} />
    )
  )
}

export const linksCrawlHelper = (array: string[], baseHref: string, labelByProp: string) => {
  const uriArray = array
  return !isArrayEmptyOrNull(uriArray)
    ? uriArray.map((uri: string, index: number) => (
        <LinkCrawl
          key={`${uri}`}
          uri={uri}
          href={`/${baseHref}/${getLastPathnameFromUrl(uri)}`}
          labelByProp={labelByProp}
        />
      ))
    : ''
}
