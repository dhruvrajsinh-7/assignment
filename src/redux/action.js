import * as types from "./actiontype";
import axios from "axios";
const getcards = (cards) => ({
  type: types.GET_CARDS,
  payload: cards,
});

const carddeleted = () => ({
  type: types.DELETE_CARD,
});

const cardadded = () => ({
  type: types.ADD_CARD,
});

const getcard = (card) => ({
  type: types.GET_SINGLE_CARD,
  payload: card,
});

const updatecard = (card) => ({
  type: types.UPDATE_CARD,
});
export const loadcards = () => {
  return function (dispacth) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        // let var = await res.json();

        dispacth(getcards(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deletecards = (id) => {
  return function (dispacth) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispacth(carddeleted());
        dispacth(loadcards());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addcards = (card) => {
  return function (dispacth) {
    axios
      .post(`${process.env.REACT_APP_API}`, card)
      .then((res) => {
        dispacth(cardadded());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getsinglecard = (id) => {
  return function (dispacth) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispacth(getcard(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updatecards = (card, id) => {
  return function (dispacth) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, card)
      .then((res) => {
        dispacth(updatecard());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
