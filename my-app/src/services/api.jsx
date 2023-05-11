import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token ='BQAkBSMiPDTGI3lqaqAabNWrxHfVM82KS1usm4NXN0h8gktRTAxhCxqdNsN-hYdK0GWGMeoj0y6H4rDgsbGV-O-1_f0h6o5C2mtXRm846Ic2A0JotCgoZYbzY4K7ky-lzSuJfx--avhum0MEMFH0KTu-ZVVODyOfOmOr5z2ixtA09-6HIGlTeR2T_1JIwDFwRn5daHYuElQBUlOQ3sZBXtNWYL5UOHCsG5oKs8C4_kYEb47Qo44r59ZMy9ZDHCiD4hNaxxOoPxl2_Gc2Oiy8cPwI_Q';
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };