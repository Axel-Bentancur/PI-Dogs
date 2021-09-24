import axios from "axios";

const getDogs = async () => {
  let url = `http://localhost:3001/dogs`;
  const res = await axios.get(url);
  return res.data;
};

module.exports = getDogs;
