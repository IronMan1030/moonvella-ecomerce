import React from "react";
import { Link } from "react-router-dom";
import { REGISTER } from "../../../settings/constants";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
// import Input from "../../../components/Input/Input";
import "./Login.css";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleClickSignUp = () => {
    window.location.href = REGISTER;
  };

  return (
    <div className="container">
      <div className="login-section">
        <div className="login-header"></div>
        <div className="login-body">
          <div className="text-center mb-4 mt-3">
            <h2>Login User</h2>
            <p>Login with your email & password</p>
            <hr />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="email"
                className={`form-control ${errors.email && "errors-outline"}`}
                placeholder="UserName or Email"
                name="email"
                ref={register({ required: true })}
              />
              {/* <Input type="text" inputRef={register({ required: true })} name="email" placeholder="UserName or Email" /> */}
            </div>
            {errors.email && <p className="errors-section">Email is required.</p>}
            <div className="form-group mt-4">
              <input
                type="password"
                className={`form-control ${errors.pwd && "errors-outline"}`}
                placeholder="Password"
                name="pwd"
                ref={register({ required: true })}
              />
              {/* <Input type="password" inputRef={register({ required: true })} name="pwd" placeholder="Password" /> */}
            </div>
            {errors.pwd && <p className="errors-section">Password is required.</p>}
            <div className="d-flex justify-content-between mt-4">
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="loggedInCheck" />
                <label className="form-check-label" htmlFor="loggedInCheck">
                  keep me logged in
                </label>
              </div>
              <div className="forgot-password">
                <Link to="/">Forgot Password?</Link>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-4">
              <Button
                type="submit"
                overrides={{
                  BaseButton: {
                    style: () => ({
                      width: "150px",
                      height: "40px",
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px",
                      borderBottomLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                    }),
                  },
                }}
              >
                Log In
              </Button>
            </div>
          </form>
          <div className="to-register text-center">
            <p>
              <span className="line-center">New to User?</span>
            </p>
            <div className="d-flex justify-content-center mt-4 mb-4">
              <Button
                type="submit"
                onClick={handleClickSignUp}
                overrides={{
                  BaseButton: {
                    style: () => ({
                      width: "150px",
                      height: "40px",
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px",
                      borderBottomLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                    }),
                  },
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
