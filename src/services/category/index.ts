import { instance } from "../axios";
import { getCategoryPath } from "../path";

export const getCategoryService = () =>
  instance({
    url: getCategoryPath,
    method: "GET",
  })
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
