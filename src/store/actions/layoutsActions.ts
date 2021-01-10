import { Dispatch } from 'redux'
import { layoutsSlice } from '../reducers/layouts'

const { breakpointChange } = layoutsSlice.actions

// Set new breakpoint
export const setBreakpoint = (breakpoint: string) => (dispatch: Dispatch) => dispatch(breakpointChange(breakpoint))
