import { LOCATION_CHANGE } from './actions'
import createInitialRouterState from './utils/createInitialRouterState'
import { fromJS } from 'immutable'

const createRouterReducer = structure => {
  const initialRouterState = createInitialRouterState(structure)
  const initialState = fromJS(initialRouterState())

  /**
   * This reducer will update the state with the most recent location Router
   * has transitioned to. This may not be in sync with the Router, particularly
   * if you have use getInitialProps, so reading from and relying on
   * this state is discouraged.
   */
  const routerReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
      case LOCATION_CHANGE: {
        return state.merge(payload)
      }
      default:
        return state
    }
  }

  return routerReducer
}

export default createRouterReducer
