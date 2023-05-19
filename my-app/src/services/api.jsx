import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token = 'BQBJPN9hvTPV_CyWyFuS89ihGtQOwYSexW_-aZd1_psfOhESMW0Q9FRIT6ePcbnDoxJ7Df3QjgSasAMHYnZNYl8mlKdeJ0EwIAF9SY_FE4Ks0mzOhoAT_xkk6InHosrLVMIRbS8DZ0nfTou_WgzvliuN-rQN6TbF0G5dzNXUKg4UlY1kqqOIs2Rp9l_6OwMVipQGhcafIVTsIQT2UyKDLOVgbDJe7PxmOptrE5XYhNTQlkuK1jiKHe7fzIJHa5WCfMB9tQTn3jlmgnPwjFRjyL2q4A';
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };