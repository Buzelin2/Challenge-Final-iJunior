import axios from "axios";

const api = axios.create({
  baseURL: "https://github.com/UFMGInformaticaJr/Trainee-Spotify",
});

export default api;