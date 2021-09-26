const dogsCtrl = {};
const {
  getBreeds,
  getCustomBreeds,
  getBreedNameFull,
  newDog,
  getTemp,
} = require("../helpers/Helpers");

dogsCtrl.getBreedList = async (req, res) => {
  res.json(
    Object.keys(req.query).length === 0
      ? await getBreeds()
      : await getCustomBreeds(req.query)
  );
};

dogsCtrl.getBreedName = async (req, res) => {
  const { name } = req.params;
  const breed = await getBreedNameFull(name);
  res.json(breed);
};

dogsCtrl.createBreed = async (req, res) => {
  await newDog(req.body);
  res.status(201);
};

dogsCtrl.getTemperamentList = async (_req, res) => {
  const newData = await getTemp();
  res.status(201).json(newData);
};

//********************************************************************** */

module.exports = dogsCtrl;
