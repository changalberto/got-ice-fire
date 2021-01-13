import React, { useEffect } from 'react'
import { Params } from 'wouter'
import { useSelector, useDispatch } from 'react-redux'

import { ICharacter } from '../../models'
import { RootState, AppDispatch } from '../../store'
import { historyGoBack } from '../../utilities'
import { fetchGotCharacterById } from '../../store/actions/services.actions'

import Page from '../../components/Page'

type CharacterDetailsProps = {
  params: Params
}

export const CharacterDetailsContainer = ({ params }: CharacterDetailsProps) => {
  const { id } = params
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { character }: { character: ICharacter } = useSelector((state: RootState) => state.services)
  const dispatch: AppDispatch = useDispatch()

  // Fetch character details
  useEffect(() => {
    if (id) {
      const promise = dispatch(fetchGotCharacterById(id))
      return () => promise.abort()
    }
  }, [id, dispatch])

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
