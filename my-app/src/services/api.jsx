import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token ='BQBS7j5m0wX1aIhA6Gg_GmBRuRfm_ttXRQFaGCNSkC8sMatUOl8CL1f8FqsEpG3GKKM3Y5g_9iE2_hhrL2feZ8Mv0j8htYJp-uWOP9dB81auI7cMtCFlvaM-_CkY27kTtr6aUesxFGVwRxZKvvqH0zzpbhx7dG6uLcsyl32uordSIDGkSm6nGx4Om_2gzfGydD_rRSzbFypV89qt6Nx-WAYUhzlvVP40_lXLb4Odvxk91YwiGTTG1IExxTqnNwyPTAt8mM0wtlkdykFM5hiSyfD1jQ';
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };