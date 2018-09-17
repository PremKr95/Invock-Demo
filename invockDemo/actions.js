

// We speciify the name of the action as a variable

export const PARTY_DETAIL = 'PARTYDETAILS'

// This is an action creator, it simply specifies the action.
// this is what we call to send an action.


export function setPartyDetails(data) {
  return {
    type: PARTY_DETAIL,
    payload:data
  }
}