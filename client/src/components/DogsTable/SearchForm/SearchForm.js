import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchForm.css";

export default function SearchForm({ temperamentList }) {
  const [values, setValues] = useState({
    breed: "",
    temperament: "",
    minweight: "",
    maxweight: "",
    order: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value.toLowerCase() });
  };

  const cleanValues = () => {
    setValues({
      breed: "",
      temperament: "",
      minweight: "",
      maxweight: "",
      order: "",
    });
  };

  /*   const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      console.log("hola");
    }
  }; */
  return (
    <div className="search-form">
      <form className="form">
        <div className="form-container">
          <div className="options-container">
            <label htmlFor="breed" className="label">
              <span>- BREED</span>
            </label>
            <input
              type="text"
              name="breed"
              value={values.breed}
              autoComplete="off"
              onChange={onHandleChange}
            />
          </div>
          <div className="options-container">
            <label className="label">
              <span>- TEMPERAMENT</span>
            </label>
            <select onChange={onHandleChange} name="temperament">
              <option value="">Choose</option>
              {temperamentList
                ? temperamentList.map((e) => (
                    <option value={e.type} key={e.id}>
                      {e.type}
                    </option>
                  ))
                : null}
            </select>
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
                onChange={onHandleChange}
                value={values.minweight}
              />
              <label className="create-options">
                <span>Max</span>
              </label>
              <input
                type="number"
                name="maxweight"
                min="01"
                max="100"
                onChange={onHandleChange}
                value={values.maxweight}
              />
            </div>
          </div>
          <div className="options-container">
            <label className="label">
              <span>- ORDER</span>
            </label>
            <div>
              <input
                type="radio"
                name="order"
                value="asc"
                checked={values.order === "asc"}
                className="radio-input"
                onChange={onHandleChange}
              />
              <label htmlFor="ascendent" className="label label-input">
                <span>Ascendent</span>
              </label>
            </div>
            <div className="input-container">
              <input
                type="radio"
                name="order"
                value="desc"
                checked={values.order === "desc"}
                className="radio-input"
                onChange={onHandleChange}
              />
              <label htmlFor="descendent" className="label label-input">
                <span>Descendent</span>
              </label>
            </div>
          </div>
          <div className="options-container">
            <div className="buttons">
              <Link
                to={`?name=${values.breed}&temperament=${values.temperament}&minweight=${values.minweight}&maxweight=${values.maxweight}&or=${values.order}`}
              >
                <div className="button-inp">
                  <span>SEARCH</span>
                </div>
              </Link>
              <Link to="#">
                <div className="button-inp" onClick={cleanValues}>
                  <span>CLEAN</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

/*   const onhandleNumber = (e) => {
    const { name, value } = e.target;
    if (value < 10) {
      setValues({ ...values, [name]: 0 + value });
    } else {
      setValues({ ...values, [name]: value });
    }
  }; */
