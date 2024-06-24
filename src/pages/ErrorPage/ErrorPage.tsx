import React, { useEffect } from "react";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import "./ErrorPage.css"; // Import your CSS file

const ErrorPage: React.FC = () => {
  useEffect(() => {
    console.log("Invalid route accessed");
  }, []);

  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
  }

  return (
    <div className="not-found-container">
      <a className="not-found-link" onClick={() => logoutUser()}>
        Return To Login
      </a>
    </div>
  );
};

export default ErrorPage;
