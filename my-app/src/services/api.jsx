import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token =
  "BQCyuzCAeAa5gRuprDF1uuZ1mBBP2J8crUoCoobKh5kzyVMTBwzCWtJLx2RBREE_9oQw8RceZns5ktY3Z0XTgTIbWrlYKXfPmQrlTKI7QmJYy-tXvWoyqNvFUagrVRNHOKetCTXCvnviMaZxjXIqyroV424N8UoX6_RViCsR9bekhV3iiYNLl0-XfUdRiTX5Vwb7x7qrB_b2h7rtwKncM9FWvjEztBKPHbWqQjtB2Jl5MA9wPEnTDeaUMHdLetE0I8x4LpI";
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };