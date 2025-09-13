import axios from "axios";

const FORKIFY_BASE_URL = "https://forkify-api.jonas.io/api/v2/recipes";

export const fetchFromForkify = async (endpoint) => {
  const url = `${FORKIFY_BASE_URL}${endpoint}`;
  const response = await axios.get(url);
  return response.data;
};
