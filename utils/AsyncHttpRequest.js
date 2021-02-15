import axios from "axios";

export const getData = async (url, setData) => {
  try {
    const { data } = await axios.get(url);
    if (data) {
      setData(data.Search);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const post = async (url, formData = null, config = null) => {
  return axios.post(url, formData, config);
};

// export function put(url, params = null, config = null) {
//   return axios.put(url, params, config);
// }

// export function remove(url, params = null) {
//   return axios.delete(url, params);
// }
