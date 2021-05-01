export const reducer  = (state: any = {
  stateForTheUrl: null
}, action: any) => {
  switch(action.type){
    case 'setToURL':
      return {
        ...state,
        stateForTheUrl: action.payload
      }
    default:
      return state
  }
}
