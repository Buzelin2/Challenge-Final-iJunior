import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token = 'BQDpYas-EJPdhHSrAFpUq3QX6nPKpYPb7vrxPTtj2xbTqFOAVPz3C0RK08l9MenAsUeeDV7RkYm93322gl4m2tRu4eiRAM1LKifC52vHKyJl2pdrjtzQS_Gey6KigfQV0lesIGIW-wu-GcqxhG9PjEGJR7MNi8SO5krKBdQKs2U6K3-8XQq0KFB7jgd3agAnCT104Lrs_pI6fL3wuPF0jSRzV0YpB5OVeGyAO8niG7AE60jPKnUbwWu8vs3iT3YgSvEBXZzbteGYqy9PftXQFjkgyQ';
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };