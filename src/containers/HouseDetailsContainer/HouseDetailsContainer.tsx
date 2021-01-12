import React, { useEffect } from 'react'
import { Params } from 'wouter'
import { useSelector, useDispatch } from 'react-redux'

import { IHouse } from '../../models'
import { RootState, AppDispatch } from '../../store'
import { fetchGotHouseById } from '../../store/actions/services.actions'

type HouseDetailsProps = {
  params: Params
}

export const HouseDetailsContainer = ({ params }: HouseDetailsProps) => {
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

  return isLoading ? <p>Loading...</p> : <div className="house-details">{JSON.stringify(house)}</div>
}