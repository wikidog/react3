import { FETCH_WEATHER } from "../actions";

export default function(state=[], action) {

  // Redux-Promise middleware handles the promise for us
  // we can process the result of the promise here
  //
  switch (action.type) {
    case FETCH_WEATHER:

      // we cannot use state.push() function here because it mutates state
      // this is ES6 syntax, which returns a new array
      return [ action.payload.data, ...state ];
  }

  return state;
}
