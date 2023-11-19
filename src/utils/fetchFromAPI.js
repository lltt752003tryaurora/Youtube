import axios from "axios";

export const BASE_URL = "http://youtube-gamma-eight.vercel.app";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    // 'token': localStorage.getItem("LOGIN_USER")
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export const getVideoAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video`);
  return data.content;
};

export const getVideoTypeAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-type`);
  return data.content;
};

export const getVideoByTypeAPI = async (typeid) => {
  const { data } = await axios.get(
    `${BASE_URL}/video/get-video-by-type/${typeid}`
  );
  return data.content;
};
