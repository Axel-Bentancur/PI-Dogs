import React from "react";
import { Link } from "react-router-dom";

/* COMPONENTS */
import Pagination from "../../Pagination/Pagination";
import Loader from "../../Loader/Loader";

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
            <div className="card" key={e.id}>
              <div className="img-container">
                <div className="dog-img">
                  <img src={e.image.url} alt="dog" />
                </div>
              </div>
              <div className="info-dog">
                <span className="breed-name">{e.name}</span>
                <span className="info">{`Temperament: ${e.temperament}`}</span>
                <span className="info">{`Weight: ${e.weight.metric} kg`}</span>
                <Link to={`/dogs/breed/${e.name}`}>
                  <div className="button-info">
                    <span className="button-more info">+ MORE</span>
                  </div>
                </Link>
              </div>
            </div>
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
