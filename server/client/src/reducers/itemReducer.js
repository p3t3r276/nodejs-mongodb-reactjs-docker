import { v4  } from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS  } from '../actions/types'

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
    default:
      return state;
  }
}