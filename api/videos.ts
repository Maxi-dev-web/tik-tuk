import axios from "axios";
import { iVideo } from "../interfaces/HomePage.interface";
import { iUser } from "../interfaces/User.interface";

export const VideosAPI = {
  requestVideoData: async (limit: string | number) => {
    const { data } = await axios.request<iVideo[]>({
      method: "GET",
      url: `https://tiktok33.p.rapidapi.com/trending/feed?limit=${limit}`,
      headers: {
        "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPID_HOST,
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_KEY,
      },
    });
    return data;
  },
  requestUserInfo: async (username: string) => {
    const { data: userInfo } = await axios.request<iUser>({
      method: "GET",
      url: `https://tiktok33.p.rapidapi.com/user/info/${username}`,
      headers: {
        "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPID_HOST,
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_KEY,
      },
    });
    return userInfo;
  },
};
