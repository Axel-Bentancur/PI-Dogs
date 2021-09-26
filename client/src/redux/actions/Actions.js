import axios from "axios";
export const GET_BREEDS = "GET_BREEDS";
export const GET_BREED = "GET_BREED";
export const GET_TEMPERAMENT = "GET_TEMPERAMENT";
export const CREATE_BREED = "CREATE_BREED";
export const CLEAN_BREED = "CLEAN_BREED";

export const getBreeds = (params) => {
  return (dispatch, getState) => {
    axios.get(`http://localhost:3001/dogs${params}`).then((response) => {
      dispatch({ type: GET_BREEDS, payload: response.data });
    });
  };
};

export const getBreed = (breedName) => {
  return (dispatch, getState) => {
    axios.get(`http://localhost:3001/dogs/${breedName}`).then((response) => {
      dispatch({ type: GET_BREED, payload: response.data });
    });
  };
};

export const createBreed = (breedInfo) => {
  return (dispatch, getState) => {
    axios.post(`http://localhost:3001/dog`, { breedInfo }).then((response) => {
      dispatch({ type: CREATE_BREED });
    });
  };
};

export const getTemperaments = (breedInfo) => {
  return (dispatch, getState) => {
    axios.get(`http://localhost:3001/temperament`).then((response) => {
      dispatch({ type: GET_TEMPERAMENT, payload: response.data });
    });
  };
};

export const cleanBreed = () => {
  return { type: CLEAN_BREED, payload: [] };
};
