import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBreed } from "../../redux/actions/Actions";
import { Link } from "react-router-dom";

import Loader from "../Loader/Loader";

/* STYLES */
import "./DogInfo.css";

export default function DogInfo({ match }) {
  const breed = useSelector((state) => state.dogReducer.breed);
  const dispatch = useDispatch();
  const dbTemp = breed.temperamentos;

  useEffect(() => {
    dispatch(getBreed(match.params.BreedId));
  }, [dispatch, match.params.BreedId]);

  const stringTemp = () => {
    let str = "";
    breed.temperamentos.map(function (item) {
      return (str += ` ${item.type},`);
    });
    let tempString = str.slice(0, -1);
    return <span className="dog-breed-info">{tempString}</span>;
  };

  if (breed?.weight?.imperial) {
    return (
      <div className="main">
        <div className="container">
          <div className="container-info">
            <div className="info-imagen">
              {breed?.image?.reference_image_id ? (
                <img
                  className="dog-img"
                  src={breed.image.reference_image_id}
                  alt="breed-img"
                />
              ) : (
                <img
                  className="dog-img"
                  src={breed.reference_image_id}
                  alt="breed-img"
                />
              )}
            </div>
            <div className="dog-info">
              <span className="dog-breed-name">{breed.name.toUpperCase()}</span>
              <span className="dog-origin">{breed.origin}</span>
              <span className="dog-tags">Temperament:</span>
              {dbTemp ? (
                stringTemp()
              ) : (
                <span className="dog-breed-info">{breed.temperament}</span>
              )}
              <span className="dog-tags">Weight:</span>
              <span className="dog-breed-info">{`${breed.weight.imperial} Kg`}</span>
              <span className="dog-tags">Height:</span>
              <span className="dog-breed-info">{`${breed.height.metric} Cm`}</span>
              <span className="dog-tags">Life Span:</span>
              <span className="dog-breed-info">{breed.life_span}</span>
            </div>
          </div>
          <Link to="/dogs">
            <div className="button-info">
              <span className="button-more info">{`<< BACK`}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
}
