const axios = require("axios");


const url = "http://database:8004/Planet";

module.exports = {
  list: async () => {
    const { data } = await axios.get(url);
    return data;
  },
  create: async (planet) => {
    const { data } = await axios.post(url,planet);
    return data;
  },
  get: async(id) =>{
    const { data } = await axios.get(`${url}/${id}`);
    return data
  },
  delete: async (id) =>{
    const { data } = await axios.delete(`${url}/${id}`);
    return data
  },
  update: async (id, planet) =>{
    const {data} = await axios.put(`${url}/${id}`, planet);
    return data  
  }
}