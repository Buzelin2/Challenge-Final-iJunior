import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token = 'BQCffmukXM_AuTUDrz4AJC6_I6g2RIFpZQyKlf78p-3pjd6umXdmDayCGjxhYYpjCecPw_MyxP8lTHu3mvRnB5wKjZ-Adt93uTkJtcspWV3eyDBuAhuHBAuR_I82cy3iUMIdRl5Rx3bXK82ITWE1gh8VZapxALN0Er_koujNp6TahZIVcHC_OdR1YXgtRxXaLQALeEvVXobRXTPWhd4M8TSUZlM5O_NWzXTYr0Uhsbt9iY0W4cXu0eIARXMr0SnkakZXJ6YmQ4HLsJgH33Ocp7JJ_g';
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };