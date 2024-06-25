import React, { ComponentType, Suspense, useEffect, useState } from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';
import AuthService from './../../services/AuthService';
import { BreadCrumb } from 'primereact/breadcrumb';
import { useTranslation } from "react-i18next";

interface ProtectedRouteProps extends RouteProps {
  component: ComponentType<any>;
  title?: string; // Optional title prop
  breadcrumb?: { label: string, url: string }[]; // Optional breadcrumb prop
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, title, breadcrumb, ...rest }) => {
  const [items, setItems] = useState<any[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (title) {
      document.title = title; // Set document title if title prop is provided
    }
  }, [title]);

  useEffect(() => {
    if (breadcrumb) {
      setItems(breadcrumb); // Update breadcrumb items
    }
  }, [breadcrumb]);

  return (
    <Route
      {...rest}
      render={(props) =>
        AuthService.isAuthenticated() ? (
          <>
            {breadcrumb && (
              <div className="border-0">
                <BreadCrumb
                  model={items}
                  home={{ icon: "pi pi-home", url: "/" }}
                />
              </div>
            )}

            {title && (
              <div className="font-bold text-lg text-primary-600 mb-2">
                {title}
              </div>
            )}

            <Suspense
              fallback={
                <div className="flex w-screen h-screen">
                  {t("general.loading")}
                </div>
              }
            >
              <Component {...props} />
            </Suspense>
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
