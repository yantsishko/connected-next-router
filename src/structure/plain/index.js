import getIn from './getIn'
import setIn from './setIn'
import { fromJS } from 'immutable'

const structure = {
  fromJS: value => fromJS(value),
  getIn,
  merge: (state, payload) => state.merge(payload),
  toJS: value => value.toJS(),
  setIn
}

export default structure
