const axios = require("axios").default;
const { Dog, Height, Weight, Image, Temperament } = require("../db");
const dogsData = {};
let id = 265;

/************************************DOGS API************************************/

dogsData.getBreeds = async () => {
  const breedArr = [];
  const api = await dogsData.getBreedsApi();
  const db = await dogsData.getBreedDB();
  api.map((e) => {
    breedArr.push(e);
  });
  db.map((e) => {
    breedArr.push(e);
  });
  const res = breedArr.sort((a, b) => {
    return a.name - b.name;
  });
  return res;
};

dogsData.getBreedsApi = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  const res = await axios.get(url);
  return res.data;
};

dogsData.getBreedDB = async () => {
  const data = Dog.findAll({ include: [Height, Weight, Image, Temperament] });
  return data;
};

dogsData.getTemp = async () => {
  const data = Temperament.findAll();
  return data;
};

dogsData.getBreedNameApi = async (breed) => {
  const url = `https://api.thedogapi.com/v1/breeds/search?q=${breed}`;
  const res = await axios.get(url);
  const urlImg = res.data[0].reference_image_id;
  const img = {
    reference_image_id: `https://cdn2.thedogapi.com/images/${urlImg}.jpg`,
  };
  Object.assign(res.data[0], img);
  return res.data;
};

dogsData.getBreedNameFull = async (name) => {
  return (
    (await dogsData.getBreedNameDB(name)) ||
    (await dogsData.getBreedNameApi(name))[0]
  );
};

dogsData.getCustomBreeds = async (query) => {
  const NoDogs = "Dog not found";
  const list = await dogsData.getBreeds();
  const byName = await dogsData.sortingName(list, query.name);
  const bytemperament = await dogsData.sortingTemp(byName, query.temperament);
  const byWeight = await dogsData.sortingWeight(bytemperament, query.weight);
  const bySort = await dogsData.sorting(byWeight, query.or);
  return bySort.length > 0 ? bySort : NoDogs; //probably change
};

/*****************************************SORTING FUNCTIONS***********************************************/

dogsData.sortingName = async (arr, query) => {
  const newList = [];
  if (query) {
    arr.map((e) => {
      if (e.name?.toLowerCase().includes(query)) {
        newList.push(e);
      }
    });
    return newList;
  } else {
    return arr;
  }
};
dogsData.sortingTemp = async (arr, query) => {
  const newList = [];
  if (query) {
    arr.map((e) => {
      if (e.temperament?.toLowerCase().includes(query)) {
        newList.push(e);
      }
    });
    return newList;
  } else {
    return arr;
  }
};
dogsData.sortingWeight = async (arr, query) => {
  const newList = [];
  if (query) {
    arr.map((e) => {
      if (e.weight.metric?.toLowerCase().includes(query)) {
        newList.push(e);
      }
    });
    return newList;
  } else {
    return arr;
  }
};
dogsData.sorting = async (arr, query) => {
  console.log(query);
  if (!query || query === "asc") {
    return arr;
  } else {
    return arr.sort().reverse();
  }
};

/*********************************************************************************************************/

dogsData.getTemperamentList = async (breedList) => {
  let tempArrRaw = [];
  breedList.map((e) => {
    //make an arr of string of many temperaments
    tempArrRaw.push(e.temperament);
  });
  //return tempArrRaw;
  const tempString = tempArrRaw.reduce(function (pV, cV) {
    //transf that arr of strings in a huge string of temperaments
    return `${pV} ${cV}`;
  });
  tempArrRaw = tempString.split(", "); //make that huge string of temperaments in a arr of temperament
  return dogsData.words(tempArrRaw);
};

dogsData.words = (list) => {
  let newArr = [];
  for (let i = 0; i < list.length; i++) {
    //make and arr without repeat temperaments
    if (!newArr.includes(list[i])) {
      newArr.push(list[i]);
    }
  }
  return newArr.sort();
};

dogsData.createArrOfObj = async (list) => {
  const arrObj = [];
  for (let i = 0; i < list.length; i++) {
    let oco = Object.create({});
    oco.type = list[i];
    arrObj.push(oco);
  }
  return arrObj;
};

/************************************POSTGRES DB************************************/
dogsData.getBreedNameDB = async (breed) => {
  const data = await Dog.findOne({
    where: { name: breed },
    include: [Height, Weight, Image, Temperament],
  });
  return data;
};

dogsData.newBreed = async (
  id,
  name,
  bred_for,
  breed_group,
  life_span,
  origin,
  url
) => {
  const Data = await Dog.create({
    id,
    name,
    bred_for,
    breed_group,
    life_span,
    origin,
    reference_image_id: url,
  });
  id++;
  return Data.id;
};

dogsData.newHeight = async (height) => {
  const Data = await Height.create({
    metric: height,
  });
  return Data;
};

dogsData.newWeight = async (weight) => {
  const Data = await Weight.create({
    metric: weight,
  });
  return Data;
};

dogsData.newImg = async (url) => {
  const Data = await Image.create({
    id: url,
    url,
    reference_image_id: url,
  });
  return Data;
};

dogsData.newTemperament = async () => {
  console.log("asd");
};

dogsData.bulkAllTemperament = async (list) => {
  const Data = await Temperament.bulkCreate(list);
  return Data;
};

dogsData.addData = async (NewBreed, NewHeight, NewWeight, NewImg, NewTemp) => {
  const res = await Dog.findByPk(NewBreed);
  await NewHeight.setDog(res);
  await NewWeight.setDog(res);
  await NewImg.setDog(res);
  await NewTemp.addDog(res);
  return res;
};

dogsData.newDog = async (postData) => {
  const {
    name,
    bred_for,
    breed_group,
    life_span,
    origin,
    height,
    weight,
    url,
    type,
  } = postData.breedInfo;
  const NewHeight = await dogsData.newHeight(height);
  const NewWeight = await dogsData.newWeight(weight);
  const NewImg = await dogsData.newImg(
    url ||
      "https://img.freepik.com/vector-gratis/plantilla-web-error-404-lindo-perrito_23-2147763344.jpg?size=338&ext=jpg"
  );
  const NewTemp = await dogsData.newTemperament(type);
  const NewBreed = await dogsData.newBreed(
    id,
    name,
    bred_for,
    breed_group,
    life_span,
    origin,
    url
  );
  const Data = await dogsData.addData(
    NewBreed,
    NewHeight,
    NewWeight,
    NewImg,
    NewTemp
  );
  return Data;
};
module.exports = dogsData;