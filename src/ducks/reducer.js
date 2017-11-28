const initialState = {
    data: undefined,
    isLoading: false,
    error: false
}

const FETCH_DATA = "FETCH_DATA"

export default function reducer(state = initialState, action){
    switch (action.type){
        // Our Javascript Promise has 2 status -> Pending, Fulfilled, and Rejected.
        // We need to set up a case for each one. Pending is after we've made the call,
        // but don't have data back yet. This would be great for a loading bar or something cool like that.
        case FETCH_DATA + "_PENDING":
            return Object.assign({}, state, {isLoading: true})
        case FETCH_DATA + "_FULFILLED":
            return Object.assign({}, state, {data: action.payload, isLoading: false})
        case FETCH_DATA + "_REJECTED":
            return Object.assign({}, state, {error: true, isLoading: false})
        default: 
            return state
    }
}

// Function that is actually being called in our App.js file
export function fetchData (data){
    console.log('I got data')
    return {
        type: FETCH_DATA,
        payload: data
    }
}