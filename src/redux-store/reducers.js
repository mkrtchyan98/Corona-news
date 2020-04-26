import { REQUEST_DATA,RECIEVE_DATA,RECIEVE_COUNTRIES } from './actionTypes';

const initState = {
	isFetching:false,
	items:[],
	countries:[]
}

export default function (state = initState,action) {
	switch(action.type) {
		case REQUEST_DATA: {
			return { 
				...state,
				isFetching:true
			}
		}
		case RECIEVE_DATA: {
			return {
				...state,
				items:action.data.response

			}
		}
		case RECIEVE_COUNTRIES: {
			return {
				...state,
				countries:action.data.response
			}
		}

          default:
          return state

	}
}
