import React, { useEffect } from 'react'
import { Params } from 'wouter'
import { useSelector, useDispatch } from 'react-redux'

import { IHouse } from '../../models'
import { RootState, AppDispatch } from '../../store'
import { historyGoBack } from '../../utilities'
import { fetchGotHouseById } from '../../store/actions/services.actions'

type CharacterDetailsProps = {
  params: Params
}

export const CharacterDetailsContainer = ({ params }: CharacterDetailsProps) => {
  const { id } = params
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { house }: { house: IHouse } = useSelector((state: RootState) => state.services)
  const dispatch: AppDispatch = useDispatch()
  console.log('HouseDetails Id', id)

  // Fetch character details
  useEffect(() => {
    if (id) {
      const promise = dispatch(fetchGotHouseById(id))
      return () => promise.abort()
    }
  }, [id, dispatch])

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="character-details">
      <button onClick={e => historyGoBack()}>Back</button>
      <pre>
        <code>{JSON.stringify(house, null, '  ')}</code>
      </pre>
    </div>
  )
}
