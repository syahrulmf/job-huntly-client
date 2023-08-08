import { instance } from "../axios";
import { postSigninPath } from "../path";

type Data = {
  email: string;
  password: string;
};

export const signinService = (data: Data) =>
  instance({
    url: postSigninPath,
    method: "POST",
    data,
  })
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
