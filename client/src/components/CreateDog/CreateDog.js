import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBreed, getTemperaments } from "../../redux/actions/Actions";
import { Multiselect } from "multiselect-react-dropdown";
import { Link } from "react-router-dom";

/* STYLES */
import "./CreateDog.css";

export default function CreateDog() {
  const temperamentList = useSelector((state) => state.dogReducer.temperament);
  const breedList = useSelector((state) => state.dogReducer.breedList);
  const [error, setError] = useState();
  const [created, setCreated] = useState(false);
  const [dogValues, setdogValues] = useState({
    name: "",
    origin: "",
    minweight: "",
    maxweight: "",
    minheight: "",
    maxheight: "",
    minlife: "",
    maxlife: "",
    type: [],
  });
  const dispatch = useDispatch();
  function handleValidation() {
    let formValid = true;
    if (
      dogValues.name === "" ||
      dogValues.origin === "" ||
      dogValues.minweight === "" ||
      dogValues.maxweight === "" ||
      dogValues.minheight === "" ||
      dogValues.maxheight === "" ||
      dogValues.minlife === "" ||
      dogValues.maxlife === "" ||
      dogValues.type === ""
    ) {
      formValid = false;
      setError("all fields with (*) are required");
    } else {
      dispatch(createBreed(dogValues));
      cleanValues();
      setCreated(true);
    }
  }

  const cleanValues = () => {
    setdogValues({});
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setdogValues({ ...dogValues, [name]: value });
  };

  const onSelect = (tempArr) => {
    setdogValues({ ...dogValues, type: tempArr });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation(breedList);
  };

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  if (created) {
    return (
      <div className="container">
        <div className="created-container">
          <span className="create-info">Breed successfully created!</span>
          <Link to="/dogs">
            <div className="button-create">
              <span>{`GO TO SEARCH`}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <div className="create-container">
          <div className="create-circle c1">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#fca17d"
                d="M37.3,-42.3C50.4,-33.4,64.7,-23.6,69.4,-10.3C74.1,3.1,69.2,20.1,57.9,27.7C46.7,35.2,29.1,33.3,12.9,42C-3.2,50.7,-17.8,70,-29.3,70.3C-40.8,70.5,-49,51.8,-51.8,35.5C-54.6,19.2,-51.9,5.2,-48.6,-7.7C-45.3,-20.6,-41.3,-32.5,-33.1,-42.4C-24.9,-52.2,-12.4,-59.9,-0.2,-59.7C12.1,-59.5,24.1,-51.3,37.3,-42.3Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="create-circle c2">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#9a348e"
                d="M14.7,-32.7C19.4,-22.7,23.9,-19.5,37.2,-15.2C50.5,-10.9,72.7,-5.5,79.1,3.7C85.5,12.9,76.2,25.7,62.9,30.1C49.6,34.5,32.4,30.5,21.3,38.2C10.2,45.9,5.1,65.4,-3.6,71.7C-12.3,77.9,-24.6,70.9,-31.2,60.5C-37.8,50.2,-38.7,36.5,-38.4,25.9C-38.1,15.3,-36.5,7.6,-43.8,-4.2C-51,-16,-67.1,-32,-69.1,-45.5C-71.1,-59.1,-59,-70.1,-45.1,-74.9C-31.3,-79.6,-15.6,-78,-5.3,-68.7C5,-59.5,9.9,-42.7,14.7,-32.7Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <form className="create-form" onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="options-container">
                <label className="label">
                  <span>- BREED*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={dogValues.name}
                  onChange={handleOnChange}
                  className="create-input"
                />
              </div>
              <div className="options-container">
                <label className="label">
                  <span>- ORIGIN*</span>
                </label>
                <input
                  type="text"
                  name="origin"
                  onChange={handleOnChange}
                  value={dogValues.origin}
                  className="create-input"
                />
              </div>
              <div className="options-container">
                <label className="label">
                  <span>- WEIGHT*</span>
                </label>
                <div className="create-options-container">
                  <label className="create-options">
                    <span>Min</span>
                  </label>
                  <input
                    type="number"
                    name="minweight"
                    min="1"
                    max="100"
                    onChange={handleOnChange}
                    value={dogValues.minweight}
                  />
                  <label className="create-options">
                    <span>Max</span>
                  </label>
                  <input
                    type="number"
                    name="maxweight"
                    min="1"
                    max="100"
                    onChange={handleOnChange}
                    value={dogValues.maxweight}
                  />
                </div>
              </div>
              <div className="options-container">
                <label className="label">
                  <span>- HEIGHT*</span>
                </label>
                <div className="create-options-container">
                  <label className="create-options">
                    <span>Min</span>
                  </label>
                  <input
                    type="number"
                    name="minheight"
                    min="1"
                    max="100"
                    onChange={handleOnChange}
                    value={dogValues.minheight}
                  />
                  <label className="create-options">
                    <span>Max</span>
                  </label>
                  <input
                    type="number"
                    name="maxheight"
                    min="1"
                    max="100"
                    onChange={handleOnChange}
                    value={dogValues.maxheight}
                  />
                </div>
              </div>
              <div className="options-container">
                <label className="label">
                  <span>- LIFE SPAN*</span>
                </label>
                <div className="create-options-container">
                  <label className="create-options">
                    <span>Min</span>
                  </label>
                  <input
                    type="number"
                    name="minlife"
                    min="1"
                    max="100"
                    onChange={handleOnChange}
                    value={dogValues.minlife}
                  />
                  <label className="create-options">
                    <span>Max</span>
                  </label>
                  <input
                    type="number"
                    name="maxlife"
                    min="1"
                    max="100"
                    onChange={handleOnChange}
                    value={dogValues.maxlife}
                  />
                </div>
              </div>
              <div className="options-container">
                <label className="label">
                  <span>- DOG IMAGE</span>
                </label>
                <input
                  type="text"
                  name="url"
                  value={dogValues.url}
                  onChange={handleOnChange}
                  className="create-input"
                />
              </div>
              <div className="options-container">
                <label className="label">
                  <span>- TEMPERAMENT*</span>
                </label>
                <Multiselect
                  options={temperamentList}
                  displayValue="type"
                  onSelect={onSelect}
                />
              </div>
              {error ? <h4 className="error-msg">{error}</h4> : null}
              <div className="options-container">
                <div className="buttons">
                  <button className="button-inp" type="submit">
                    <span>CREATE</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

/*   const onhandleNumber = (e) => {
    const { name, value } = e.target;
    if (value < 10) {
      setdogValues({ ...dogValues, [name]: 0 + value });
    } else {
      setdogValues({ ...dogValues, [name]: value });
    }
  }; */
