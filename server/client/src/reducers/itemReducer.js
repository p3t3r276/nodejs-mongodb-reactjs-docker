import { v4  } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM  } from '../actions/types'

const initalState = {
  items: [
    { id: v4(), name: "Eggs"},
    { id: v4(), name: "Milk"},
    { id: v4(), name: "Steak"}
  ]
}

export default function (state = initalState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      }
    case DELETE_ITEM: 
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    case ADD_ITEM: 
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    default:
      return state;
  }
}