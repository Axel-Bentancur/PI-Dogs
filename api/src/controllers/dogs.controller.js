const dogsCtrl = {};
const {
  getBreeds,
  getCustomBreeds,
  getBreedNameFull,
  newDog,
  getBreedsApi,
  getTemperamentList,
  createArrOfObj,
  bulkAllTemperament,
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
  const newData = await newDog(req.body);
  res.status(201).json(newData);
};

dogsCtrl.bulkTemperament = async (_req, res) => {
  const list = await getBreedsApi();
  const Data = await getTemperamentList(list);
  const final = await createArrOfObj(Data);
  const bulk = await bulkAllTemperament(final);
  res.status(201).json(bulk);
};

dogsCtrl.getTemperamentList = async (_req, res) => {
  const newData = await getTemp();
  res.status(201).json(newData);
};

//********************************************************************** */

module.exports = dogsCtrl;
