import { isArrayEmptyOrNull, getLastPathnameFromUrl, isStringEmptyOrNull } from '../utilities'

import { LinkCrawl } from '../modules/LinksList'

export const linkCrawl = (props: any, baseHref: string, labelByProp: string) => {
  return !isStringEmptyOrNull(props.value) ? (
    <LinkCrawl
      uri={props.value}
      href={`/${baseHref}/${getLastPathnameFromUrl(props.value)}`}
      labelByProp={labelByProp}
    />
  ) : (
    ''
  )
}

export const linksCrawl = (props: any, baseHref: string, labelByProp: string) => {
  const uriArray = props.value
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
