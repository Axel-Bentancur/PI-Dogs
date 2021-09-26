import React from "react";

/* COMPONENTS */
import Pagination from "../../Pagination/Pagination";
import Loader from "../../Loader/Loader";
import Dogcard from "./DogCard/Dogcard";

/* STYLES */
import "./DogList.css";

export default function DogList({
  currentDogs,
  totalDogs,
  dogsPerPage,
  currentPage,
  paginateNumber,
}) {
  return (
    <div className="dog-table">
      {currentDogs.length > 0 ? (
        <div className="table-container">
          {currentDogs.map((e) => (
            <Dogcard dog={e} key={e.id} />
          ))}
          <Pagination
            totalDogs={totalDogs}
            dogsPerPage={dogsPerPage}
            currentPage={currentPage}
            paginateNumber={paginateNumber}
          />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
