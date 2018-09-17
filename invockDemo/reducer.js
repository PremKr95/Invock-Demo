import {PARTY_DETAIL} from './actions'


// This is the default state of the app i.e. when the app starts for the first time
const initialState = {
  partyDetails:''
}

// This is a reducer which listens to actions and modifies the state
const reducer = (state=initialState, action) => {
  // A switch is used since if more actions are added in the future, it will be easy
  // to be able to handle this in the reducer since we just add another 'case'.
  switch (action.type) {
      case PARTY_DETAIL:
      return {
        ...state,
        partyDetails: action.payload
      }
    default:
      return state
  }
}

export default reducer;