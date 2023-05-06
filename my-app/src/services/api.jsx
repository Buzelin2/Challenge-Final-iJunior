import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token ='BQC8tTwiON2CkNRvAzlaA-AcWqGMX2CdR0Fw_URigjKSAGsWhWHOJCHE0AGQxJHN2Ani7NlSYyaWSoI_h9Z-xUVSTVHCKaFlrOpPKDAKb1sV2AAf7k5v60b1s3QTc6ElQzN_tn8AJmqkJ_NsJR-DMNT_jNvtUmr7UW2SVhLP44dfCT0eEukJjgNftd_59TV5hum6qyfEGO5klUa5FFj5YvQgPQBv_6XO0o_VixD579EEc8Y6jMudcnSxINNSApiX5S1bmItHHkByhohSG5D3XN2cvo0XmVJnffWlK3BPvQ';

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };