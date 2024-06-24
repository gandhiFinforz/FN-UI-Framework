import React, { ComponentType, Suspense } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import AuthService from "./../../services/AuthService";
import { useTranslation } from "react-i18next";

interface ProtectedRouteProps extends RouteProps {
  component: ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { t } = useTranslation();
  return (
    <Route
      {...rest}
      render={(props) =>
        AuthService.isAuthenticated() ? (
          <Suspense
            fallback={
              <div className="flex w-screen h-screen">
                {t("general.loading")}
              </div>
            }
          >
            <Component {...props} />
          </Suspense>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
