import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBreeds,
  cleanBreed,
  getTemperaments,
} from "../../redux/actions/Actions";

/* COMPONENTS */
import SearchForm from "./SearchForm/SearchForm";
import DogList from "./DogList/DogList";

/* STYLES */
import "./DogsTable.css";

export default function DogsTable({ location }) {
  const req_query = location.search;
  const breedList = useSelector((state) => state.dogReducer.breedList);
  const temperamentList = useSelector((state) => state.dogReducer.temperament);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const paginateNumber = (number) => {
    setCurrentPage(number);
  };

  const totalDogs = breedList.length;
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = breedList.slice(indexOfFirstDog, indexOfLastDog);

  useEffect(() => {
    dispatch(getBreeds(req_query));
    dispatch(getTemperaments());
    dispatch(cleanBreed());
  }, [dispatch, req_query]);

  return (
    <div className="main main-container">
      <SearchForm temperamentList={temperamentList} />
      <DogList
        currentDogs={currentDogs}
        totalDogs={totalDogs}
        dogsPerPage={dogsPerPage}
        currentPage={currentPage}
        paginateNumber={paginateNumber}
      />
    </div>
  );
}
