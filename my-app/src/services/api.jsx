import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token = 'BQDtizwshpE_RqtkZGcJ3Qa-UF5uFe4a42RrJlBRtfw7AGbLqTldN4THuGupYle4_IXWKUI0WEnqAeSBrUZDHP2buN0e3hW9xcsCnXTRpHkScep7jF__NO53md0OUBr_L3u2zSS6D98os1bBdgKqwHppHiYp-L49AMPoGFt6Eid8vbeLhYlLM0YmxGwCDn5uvl4n2f46EPMxkMZ9DSeNamKm1Aigl8_Kt1k-_ITZsDFtcP4VRFktleQcCSqaZOfOJsg_hV8vDVuT3_G7EMOSwi-n2w';
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };