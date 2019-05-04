import locationFromUrl from './locationFromUrl'
import { fromJS } from 'immutable'

const createInitialRouterState = () => (url = '/') => fromJS({
  location: locationFromUrl(url),
  action: 'POP'
})

export default createInitialRouterState
