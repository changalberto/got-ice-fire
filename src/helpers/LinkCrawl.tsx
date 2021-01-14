import { isArrayEmptyOrNull, getLastPathnameFromUrl, isStringEmptyOrNull } from '../utilities'

import { LinkCrawl } from '../modules/LinksList'

export const linkCrawl = (value: string, baseHref: string, labelByProp: string) => {
  return !isStringEmptyOrNull(value) ? (
    <LinkCrawl uri={value} href={`/${baseHref}/${getLastPathnameFromUrl(value)}`} labelByProp={labelByProp} />
  ) : (
    ''
  )
}

export const linksCrawl = (array: string[], baseHref: string, labelByProp: string) => {
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
