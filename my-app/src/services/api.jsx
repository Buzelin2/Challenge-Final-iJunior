import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token =
  "BQBw5BzaHXHBrLy12xv7yXAZrjMqwhuzw7dxoCMd4_0ZSuV9llOWWlL1kqhWwrqCS5lp0xcn_KkqZlyHHYgyYZDFyHDTspkjY9m1FK6oSrDGyvzrTV-b2g4heSwryL5X7naS9v5P1bp-EAGC4ImuGF3S7QU3DsFWRwlXZMf_ziSUW1-4qF4bPO1OnVSpZZpuvUscFnDz2yfjBIRLhEa6Lx9gO2AJY8L2XFG1cicB4IvTGLV3lmBl57wnseGVEdTQezFuiknx56N_ULJQG4swkJnFjLxYGaHTgCOvOweNz45cnhMyiPqNDsgDcTuTnBh-jN0fD5t66JFwiEy2qrLVqCIbRIcTfT08u8ddoBMInIqcNw0";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };