import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { ICharacter } from '../../models'
import { RootState, AppDispatch } from '../../store'
import { servicesSlice } from '../../store/reducers/services.reducer'
import { historyGoBack } from '../../utilities'
import { fetchGotCharacterById } from '../../store/actions/services.actions'

import Page from '../../components/Page'

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

  return React.useMemo(
    () => (
      <Page
        title={`GOT | Character: ${character.name ? character.name : 'N/A'}`}
        className="character-details"
        isLoading={isLoading}
      >
        <button onClick={e => historyGoBack()}>Back</button>
        <pre>
          <code>{JSON.stringify(character, null, '  ')}</code>
        </pre>
      </Page>
    ),
    [character, isLoading]
  )
}
