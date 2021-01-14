import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Breadcrumbs, IconButton, Paper } from '@material-ui/core'
import { IoMdArrowRoundBack } from 'react-icons/io'

import { ICharacter } from '../../models'
import { RootState, AppDispatch } from '../../store'
import { servicesSlice } from '../../store/reducers/services.reducer'
import { historyGoBack, getStringValueOrNa, isStringEmptyOrNull, isArrayEmptyOrNull } from '../../utilities'
import { linkCrawlHelper, linksCrawlHelper } from '../../helpers/LinkCrawlHelper'
import { fetchGotCharacterById } from '../../store/actions/services.actions'

import Page from '../../components/Page'

import './character-details.scss'

export const CharacterDetailsContainer = () => {
  const { id } = useParams<{ id: string }>()
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { character }: { character: ICharacter } = useSelector((state: RootState) => state.services)
  const dispatch: AppDispatch = useDispatch()
  const { resetCharacterState } = servicesSlice.actions

  // Fetch character details
  useEffect(() => {
    if (id) {
      const promise = dispatch(fetchGotCharacterById(id))
      return () => {
        dispatch(resetCharacterState())
        promise.abort()
      }
    }
  }, [id, dispatch, resetCharacterState])

  return React.useMemo(() => {
    const title =
      isStringEmptyOrNull(character.name) && !isArrayEmptyOrNull(character.aliases)
        ? getStringValueOrNa(character.aliases[0])
        : getStringValueOrNa(character.name)

    const {
      gender,
      culture,
      born,
      died,
      titles,
      aliases,
      father,
      mother,
      spouse,
      allegiances,
      books,
      povBooks,
      playedBy,
    } = character

    return (
      <Page title={`GOT | Character: ${title}`} className="character-details" isLoading={isLoading}>
        <Breadcrumbs>
          <IconButton onClick={e => historyGoBack()}>
            <IoMdArrowRoundBack />
          </IconButton>
          <h3>{title}</h3>
        </Breadcrumbs>
        <Paper elevation={2}>
          <div className="inset-padding">
            <div className="paper-container">
              <h2>{title}</h2>
            </div>
            <div className="paper-container">
              <div className="info">
                <h3>Character Profile</h3>
                <p>
                  <b>Aliases:</b> {aliases?.join(', ')}
                </p>
                <p>
                  <b>Gender:</b> {getStringValueOrNa(gender)}
                </p>
                <p>
                  <b>Born:</b> {getStringValueOrNa(born)}
                </p>
                <p>
                  <b>Culture:</b> {getStringValueOrNa(culture)}
                </p>
                <p>
                  <b>Died:</b> {getStringValueOrNa(died)}
                </p>
                <p>
                  <b>Titles:</b> {getStringValueOrNa(titles?.join(', '))}
                </p>
                <p>
                  <b>Father:</b> {linkCrawlHelper(father, 'character', 'name')}
                </p>
                <p>
                  <b>Mother:</b> {linkCrawlHelper(mother, 'character', 'name')}
                </p>
                <p>
                  <b>Spouse:</b> {linkCrawlHelper(spouse, 'character', 'name')}
                </p>
                <p>
                  <b>Played By:</b> {getStringValueOrNa(playedBy?.join(', '))}
                </p>
              </div>
              <div className="books">
                <h3>Allegiances</h3>
                <div className="list">
                  {!isArrayEmptyOrNull(allegiances) ? linksCrawlHelper(allegiances, 'house', 'name') : 'N/A'}
                </div>
              </div>
              <div className="books">
                <h3>Books</h3>
                <div className="list">
                  {!isArrayEmptyOrNull(books) ? linksCrawlHelper(books, 'book', 'name') : 'N/A'}
                </div>
              </div>
              <div className="books">
                <h3>POV Books</h3>
                <div className="list">
                  {!isArrayEmptyOrNull(povBooks) ? linksCrawlHelper(povBooks, 'book', 'name') : 'N/A'}
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Page>
    )
  }, [character, isLoading])
}
