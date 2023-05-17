import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token =
  "BQAvbrJMEl-7noizkB2Z8L_Gr2PUS2i9fQT9CSpE_Z42_0OJoPaEtspoKRylKLC73ziJZcqYomGEuETg824cIipSfw0CuHmf5WQuyJ20rBVzz2doecDaopN9e3DZtFeeOFV9MtT2zY_hOOL0k6GsFJqfi6kodAwv4YacuHL_Cn5USONNaZ9SD5ZbOn17I9AsrLjIf_b3kTzF6m0tfCtHPgyw_OWsbyOAb1EOwuIWkjho_ZuyE50MLmmUXJL6rQ2eqxsuBhA";
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };