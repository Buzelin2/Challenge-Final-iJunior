import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token = 'BQBpEGVRDbrpvr0KT-KhpOCHKnAa1zmpbB9QVFQxtMxEhWv0i3xPJCzN_-fiy2SfRl5-jUJnK10phIPaWK8ZnL60RkHeD1tdCogNf2hT9gI1udJjde542917nRHEiesR-o1jnWldvJETCiBO-EtI9DjZWIM5OxS3sTWYSC25OrbzbnP57guvytQZTw8p99N1nlpm6kLMCHAQdJ78rmcl11omWM7UnHJeWGp9sAuz8e1o6Q9dSFctPnzww6SgL2h12of09ZatkZqQeXD5blDLqFL8Rg';
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };