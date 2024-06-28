import React from "react";
import FNTabs, { FNTab } from "../../components/UIComponents/Panel/FNTab/FNTab";
import LoginForm from "./LoginForm/LoginForm";
import OtherForm from "./OtherForm/OtherForm";
import SignupForm from "./SignupForm/SignupForm";

const FormComponents: React.FC = () => {
  const userFormTabs: FNTab[] = [
    {
      header: "Sign Up",
      content: <SignupForm />,
    },
    {
      header: "Login",
      content: <LoginForm />,
    },
    {
      header: "Form Components",
      content: <OtherForm />,
    },
  ];

  return <FNTabs tabs={userFormTabs} />;
};

export default FormComponents;
