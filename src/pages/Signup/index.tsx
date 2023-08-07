import { Button } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./style.css";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="signup-wrapper">
      <div className="bg-signup">
        <img src="/images/signin-bg.png" alt="/images/signin-bg.png" />
      </div>
      <div className="form-wrapper">
        <div className="form-wrapper-inner">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter full name"
                className="input-custom2"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="error">This field is required</span>
              )}
            </div>
            <div className="form-field">
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
            <div className="form-field">
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
              Register
            </Button>
            <div className="info-text">
              Already have an account ?{" "}
              <Link className="link" to={"/signin"}>
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
