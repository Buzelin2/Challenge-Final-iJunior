import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token =
  "BQA8O-2IgQMShxYvuC9BcB6nj83uGp1QsKSVzbIihIIE2uQun5yB-7tcdhK1NTAtNcWoLeI81CCV0CQOXheVx3GjeBqCgaTIM4ZX3JffXXcBpfNfsDWSd-S0s00Ia527U_qHnVAXGQs1OpjZBt51rYqZopTqgvk8YTe2t-qH4oL4bc35r9fhD39dn5XS8ccgR06TY-6ZlObqv2VkHz8RAhsuwY17H55D_05bEptyWRQhPRtTKfRyUy-rQboj_0RYWShvRVmmDozFPEJgHo8R32pDeQpck2TsDFCFQZQYoEJAYxtyqL6U6VsHugRE8wCkHmQCtzGY1TyLaJeDpUpMbVamV-VPhEeI0QlEXSVCIG1auVc";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };