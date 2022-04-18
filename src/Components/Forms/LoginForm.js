import React, { useState } from "react";
import useForm from "../../Validators/useForm";
import { useNavigate } from "react-router-dom";
import validate from "../../Validators/LoginFormValidation";
import provider from "../../Services/provider";

function LoginForm() {
  const [authError, setAuthError] = useState("");
  const history = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useForm(
    handleLogin,
    validate
  );

  function handleLogin() {
    const session = { email: values.email, password: values.password };
    provider
      .post("/api/v1/sessions", { session })
      .then((response) => {
        localStorage.setItem("User", JSON.stringify(response.data));
        history("/dashboard");
      })
      .catch((error) => {
        console.log(error.response.data.data.message);
        setAuthError(error.response.data.data.message);
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <div className="auth-bg">
          <span className="r"></span>
          <span className="r s"></span>
          <span className="r s"></span>
          <span className="r"></span>
        </div>
        <div className="card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon"></i>
              </div>
              <h3 className="mb-4">Login</h3>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email || ""}
                  required
                />
              </div>
              {errors.email && (
                <div className="form-group text-left">
                  <div className="input-group mb-3">
                    <label className="text-danger mb-1">{errors.email}</label>
                  </div>
                </div>
              )}
              <div className="input-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  value={values.password || ""}
                  required
                />
              </div>

              {errors.password && (
                <div className="form-group text-left">
                  <div className="input-group mb-3">
                    <label className="text-danger mb-1">
                      {errors.password}
                    </label>
                  </div>
                </div>
              )}

              {authError && (
                <div className="form-group text-left">
                  <div className="input-group mb-3">
                    <label className="text-danger mb-1">{authError}</label>
                  </div>
                </div>
              )}

              <button className="btn btn-primary shadow-2 mb-4">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
