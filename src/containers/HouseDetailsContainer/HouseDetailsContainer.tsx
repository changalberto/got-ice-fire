import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { IHouse } from '../../models'
import { RootState, AppDispatch } from '../../store'
import { historyGoBack } from '../../utilities'
import { fetchGotHouseById } from '../../store/actions/services.actions'

import Page from '../../components/Page'

export const HouseDetailsContainer = () => {
  const { id } = useParams<{ id: string }>()
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { house }: { house: IHouse } = useSelector((state: RootState) => state.services)
  const dispatch: AppDispatch = useDispatch()

  // Fetch character details
  useEffect(() => {
    if (id) {
      const promise = dispatch(fetchGotHouseById(id))
      return () => promise.abort()
    }
  }, [id, dispatch])

  return React.useMemo(
    () => (
      <Page title={`GOT | House: ${house?.name}`} className="house-details" isLoading={isLoading}>
        <button onClick={e => historyGoBack()}>Back</button>
        <pre>
          <code>{JSON.stringify(house, null, '  ')}</code>
        </pre>
      </Page>
    ),
    [house, isLoading]
  )
}
