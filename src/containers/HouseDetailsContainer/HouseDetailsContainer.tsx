import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Breadcrumbs, IconButton, Paper } from '@material-ui/core'
import { IoMdArrowRoundBack } from 'react-icons/io'

import { IHouse } from '../../models'
import { RootState, AppDispatch } from '../../store'
import { servicesSlice } from '../../store/reducers/services.reducer'
import { historyGoBack, isArrayEmptyOrNull, isStringEmptyOrNull, getStringValueOrNa } from '../../utilities'
import { linkCrawlHelper, linksCrawlHelper } from '../../helpers/LinkCrawlHelper'
import { fetchGotHouseById } from '../../store/actions/services.actions'

import Page from '../../components/Page'

import './house-details.scss'

export const HouseDetailsContainer = () => {
  const { id } = useParams<{ id: string }>()
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { house }: { house: IHouse } = useSelector((state: RootState) => state.services)
  const dispatch: AppDispatch = useDispatch()
  const { resetHouseState } = servicesSlice.actions

  // Fetch character details
  useEffect(() => {
    if (id) {
      const promise = dispatch(fetchGotHouseById(id))
      return () => {
        dispatch(resetHouseState())
        promise.abort()
      }
    }
  }, [id, dispatch, resetHouseState])

  return React.useMemo(
    () => (
      <Page title={`GOT | House: ${house?.name}`} className="house-details" isLoading={isLoading}>
        <Breadcrumbs>
          <IconButton onClick={e => historyGoBack()}>
            <IoMdArrowRoundBack />
          </IconButton>
          <h3>{house.name ? house.name : 'N/A'}</h3>
        </Breadcrumbs>
        <Paper elevation={2}>
          <div className="inset-padding">
            <div className="paper-container">
              <h2>{house.name ? house.name : 'N/A'}</h2>
            </div>
            <div className="paper-container">
              <div className="house-info">
                <h3>House Details</h3>
                <p>
                  <b>Overlord:</b> {linkCrawlHelper(house.overlord, 'house', 'name')}
                </p>
                <p>
                  <b>Founded:</b> {getStringValueOrNa(house.founded)}
                </p>
                <p>
                  <b>Founder:</b> {linkCrawlHelper(house.founder, 'character', 'name')}
                </p>
                <p>
                  <b>Dead:</b> {getStringValueOrNa(house.diedOut)}
                </p>
                <p>
                  <b>Region:</b> {getStringValueOrNa(house.region)}
                </p>
                <p>
                  <b>Cost of Arms:</b> {getStringValueOrNa(house.coatOfArms)}
                </p>
                <p>
                  <b>Words:</b> {getStringValueOrNa(house.words)}
                </p>
                <p>
                  <b>Ancestral Weapons:</b> {getStringValueOrNa(house?.ancestralWeapons?.join(', '))}
                </p>
                <p>
                  <b>Titles:</b> {getStringValueOrNa(house?.titles?.join(', '))}
                </p>
                <p>
                  <b>Seats:</b> {getStringValueOrNa(house?.seats?.join(', '))}
                </p>

                <p>
                  <b>Current Lord:</b> {linkCrawlHelper(house.currentLord, 'character', 'name')}
                </p>
                <p>
                  <b>Heir:</b>{' '}
                  {!isStringEmptyOrNull(house.heir) ? linkCrawlHelper(house.heir, 'character', 'name') : 'N/A'}
                </p>
              </div>
              <div className="characters">
                <h3>Cadet Branches</h3>
                <div className="list">
                  {!isArrayEmptyOrNull(house.cadetBranches)
                    ? linksCrawlHelper(house.cadetBranches, 'house', 'name')
                    : 'N/A'}
                </div>
              </div>
              <div className="characters">
                <h3>Sworn Members</h3>
                <div className="list">
                  {!isArrayEmptyOrNull(house.swornMembers)
                    ? linksCrawlHelper(house.swornMembers, 'character', 'name')
                    : 'N/A'}
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Page>
    ),
    [house, isLoading]
  )
}
