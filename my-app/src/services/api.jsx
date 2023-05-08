import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token ='BQBJlMPK8v_jbSd1GoJhFEH8rh9cNYTY-ySDMabIPTbbKoL8AvtiqbQQtsP_EoKdhuoluH3KunV1Gv6t9HP-eFltbh28Y8I6zL8VyZbs6Pe3hpISYp5iW8JdMryzJq9DUhDSYTYqqDEEMFECahjkF_194NaqFy0mnFWCkbjSuHYDcppCoXRek5FkqirEv_7YO7Du1A9aapOcs7PWEMBxa7eiDOhoK2QVhzonDlU7JZ1-Tyoiw_kaBv-9kp3dQagLT6R4LB7cxHwRRNA2DECmAHlmsfka7up_VIE-YZvj0g';
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };