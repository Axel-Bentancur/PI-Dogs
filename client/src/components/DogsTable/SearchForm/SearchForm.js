import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";
import "./SearchForm.css";

export default function SearchForm({ temperamentList }) {
  const [values, setValues] = useState({
    breed: "",
    temperament: [],
    weight: "",
    order: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value.toLowerCase() });
    console.log(name, value);
  };

  const cleanValues = () => {
    setValues({
      breed: "",
      temperament: "",
      weight: "",
      order: "",
    });
  };

  const onSelect = (tempArr) => {
    setValues({ ...values, temperament: tempArr });
  };

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
            <label htmlFor="temperament" className="label">
              <span>- TEMPERAMENT</span>
            </label>
            <Multiselect
              options={temperamentList}
              displayValue="type"
              onSelect={onSelect}
            />
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
                to={`?name=${values.breed}&temperament=${values.temperament}&weight=${values.weight}&or=${values.order}`}
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

/*  */
