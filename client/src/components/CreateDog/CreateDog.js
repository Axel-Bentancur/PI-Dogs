import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBreed } from "../../redux/actions/Actions";

/* STYLES */
import "./CreateDog.css";

export default function CreateDog() {
  const [dog, setdog] = useState({});
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setdog(asd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBreed(dog));
  };

  let asd = {
    name: "rtyrtyt",
    bred_for: "crianza",
    breed_group: "muchos",
    life_span: "3-5 años",
    origin: "hungaro",
    height: "2 - 5",
    weight: "15 - 56",
    url: "https://www.purina.es/sites/default/files/styles/nppe_breed_selector_500/public/breed_library/chihuahua_smooth_coat.jpg?itok=hAK_J1ZX",
    type: "qqqq",
  };

  console.log(dog);
  return (
    <div className="main">
      <div className="asd">
        <form className="create-form">
          <div className="form-container">
            <div className="options-container">
              <label htmlFor="breed" className="label">
                <span>- BREED</span>
              </label>
              <input type="text" />
            </div>
            <div className="options-container">
              <label htmlFor="weight" className="label">
                <span>- WEIGHT</span>
              </label>
              <div className="create-options-container">
                <label htmlFor="weight-min" className="create-options">
                  <span>Min</span>
                </label>
                <input type="number" min="1" max="100" />
                <label htmlFor="weight-max" className="create-options">
                  <span>Max</span>
                </label>
                <input type="number" min="1" max="100" />
              </div>
            </div>
            <div className="options-container">
              <label htmlFor="height" className="label">
                <span>- HEIGHT</span>
              </label>
              <div className="create-options-container">
                <label htmlFor="height-min" className="create-options">
                  <span>Min</span>
                </label>
                <input type="number" min="1" max="100" />
                <label htmlFor="height-max" className="create-options">
                  <span>Max</span>
                </label>
                <input type="number" min="1" max="100" />
              </div>
            </div>
            <div className="options-container">
              <label htmlFor="life-span" className="label">
                <span>- LIFE SPAN</span>
              </label>
              <div className="create-options-container">
                <input type="number" min="1" max="30" />
              </div>
            </div>
            <div className="options-container">
              <label className="label">
                <span>- TEMPERAMENT</span>
              </label>
            </div>
            <div className="options-container">
              <div className="buttons" onClick={handleClick}>
                <div className="button-inp">
                  <span>cargar</span>
                </div>
              </div>
              <div className="buttons" onClick={handleSubmit}>
                <div className="button-inp">
                  <span>enviar</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
