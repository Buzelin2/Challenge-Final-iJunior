import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token = 'BQBOACnEUYL_9-x25PsYNN-wplNi3dtCDkeersA7_kXGW7o5G0BWmlctPdmZDMac2cBI3Rs-XrbV739MzJs54xnekQ_nXqggsxN8RFA4tuvdP_VLJgr1DoWgQMZoJsa3ZItGxxcJaHt-xtc7LvE_fwCG0zOP8meESZVgz5YhN95GjrApW-p6blFFT_i1TUDwDFxRUuRQ4Fv4Dc26uHGHFm8ibOyqAtTTNGJqTMW-XOJ3WyR9dkARXogc9sC1Q5lZ5DPuTaUKbAhdxipZnkwNfa9vPg';
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };