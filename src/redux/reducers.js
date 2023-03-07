import * as types from "./actiontype";

const intialState = {
  cards: [],
  isloading: true,
  card: {},
};

const cardReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.GET_CARDS:
      return {
        ...state,
        cards: action.payload,
        isloading: false,
      };
    case types.DELETE_CARD:
      return {
        ...state,
        isloading: false,
      };
    case types.ADD_CARD:
      return {
        ...state,
        isloading: false,
      };
    case types.GET_SINGLE_CARD:
      return {
        ...state,
        isloading: false,
        card: action.payload,
      };
    case types.UPDATE_CARD:
      return {
        ...state,
        isloading: false,
      };
    default:
      return state;
  }
};

export default cardReducer;
