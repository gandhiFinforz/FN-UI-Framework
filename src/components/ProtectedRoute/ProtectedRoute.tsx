import React, { ComponentType, Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { Breadcrumb } from "../../services/MenuJSON";

interface ProtectedRouteProps {
  component: ComponentType<any>;
  title?: string; // Optional title prop
  breadcrumb?: Breadcrumb[]; // Optional breadcrumb prop
  access: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  title,
  breadcrumb,
  access,
}) => {
  const [items, setItems] = useState<any[]>([]);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (!access.includes("admin")) {
      logoutUser();
      navigate("/");
    }
  });

  function logoutUser() {
    dispatch(logout());
  }

  return (
    <>
      {breadcrumb && (
        <div className="border-0">
          <BreadCrumb model={items} home={{ icon: "pi pi-home", url: "/" }} />
        </div>
      )}

      {title && (
        <div className="font-bold text-lg text-primary-600 mb-2">{title}</div>
      )}
      
        <Suspense
        fallback={
          <div className="flex w-screen h-screen">{t("general.loading")}</div>
        }
      >
        <Component />
      </Suspense>
    </>
  );
};

export default ProtectedRoute;
