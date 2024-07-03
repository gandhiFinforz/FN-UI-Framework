import React, { useEffect } from "react";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import notfound from "../../assets/img/error-page.png";
import FNButton from "../../components/UIComponents/Form/FNButton/FNButton";
const ErrorPage: React.FC = () => {
  useEffect(() => {
    console.log("Invalid route accessed");
  }, []);

  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
  }

  return (
    <div className="flex justify-content-center align-items-center flex-column w-screen h-screen">
      <img src={notfound} alt="404-notfound" />
      <FNButton
        onClick={() => logoutUser()}
        label={"Return To Login"}
      ></FNButton>
    </div>
  );
};

export default ErrorPage;
