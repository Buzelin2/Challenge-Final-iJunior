import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token ='BQA-thTlKls5sz5F9iUkt7ZiHYsrzuN_ZbWq058bYxukLtwaUKq4tnAspOI1j_dXfwsX2icxdAUgz6gNe_OfCugGqQGkEhdb3MMBLaBeUkSU4US2NbGIoKe6gLsYiCKlrBMKm7Wskodbmu8DLx3hFpg9jwC17V1OCqRy4NA7NG-KeLw0ohfK1cI44XJzUeEpUUa3eN1nK4Byj4vquN7Q0nq_VjymTkKO9RN3P6zZMOnOlMC8JtdgHc9m8IF5fApEMOXTDv95ofUG0HhTiI9ZkTKnMg';
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };