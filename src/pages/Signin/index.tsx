import { Button } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./style.css";

type Inputs = {
  email: string;
  password: string;
};

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="signin-wrapper">
      <div className="bg-signin">
        <img src="/images/signin-bg.png" alt="/images/signin-bg.png" />
      </div>
      <div className="form-wrapper">
        <div className="form-wrapper-inner">
          <h2>Welcome Back, Dude</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                className="input-custom2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
            </div>
            <div className="form-field2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="input-custom2"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="error">This field is required</span>
              )}
            </div>
            <Button htmlType="submit" type="primary" className="button-custom">
              Signin
            </Button>
            <div className="info-text">
              Don't have an account ?{" "}
              <Link className="link" to={"/signup"}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
