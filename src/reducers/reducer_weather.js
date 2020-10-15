import {FETCH_WEATHER} from '../actions/index'



export default async function(state = null, action) {

    switch(action.type) {
        case FETCH_WEATHER:
            return action.payload.data
    }

    

    console.log('action received ', action)
    return state

}