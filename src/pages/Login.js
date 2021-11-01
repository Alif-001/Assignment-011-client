import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import google from "./../assets/images/google.png";

const Login = () => {
  const { AllContexts } = useAuth();
  const history = useHistory();

  const location = useLocation();
  const redirect = location?.state?.from || "/home";

  const { setUser, setError, signInWithGoogle } = AllContexts;

  return (
    <div className="text-start container my-4">
      <h2>Please Login</h2>
      <hr className="text-danger" />

      <div className="text-center mb-5">
        <button
          onClick={() => {
            signInWithGoogle()
              .then((result) => {
                setUser(result.user);
                history.push(redirect);
              })
              .catch((err) => {
                setError(err.message);
              });
          }}
          className="btn btn-success m-5"
        >
          <img src={google} width="46px" alt="google-icon" />{" "}
          <span className="fw-bold text-white ">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
