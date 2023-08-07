import { instance } from "../axios";
import { getFeaturedJobPath } from "../path";

export const getFeaturedJobService = () =>
  instance({
    url: getFeaturedJobPath,
    method: "GET",
  })
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
