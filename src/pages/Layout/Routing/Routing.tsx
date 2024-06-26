import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "../../../components/ProtectedRoute/ProtectedRoute";
import UserTable from "../../DataTable/UserTable";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Dashboard from "../../Dashboard/Dashboard";
import FormComponents from "../../Form/FormComponents";

const Routing: React.FC = (width) => {
  return (
    <div className="w-full mt-3 ml-2 px-3">
      <Switch>
        <ProtectedRoute
          exact
          path="/dashboard"
          component={Dashboard}
          title="Dashboard"
          breadcrumb={[{ label: "Dashboard", url: "/dashboard" }]}
        />
        <ProtectedRoute
          exact
          path="/data/table"
          component={UserTable}
          title="Data Table"
          breadcrumb={[{ label: "Data", url: "/data" }, { label: "Table", url: "/table" }]}
        />
        <ProtectedRoute
          exact
          path="/form/components"
          component={FormComponents}
          title="Form Components"
          breadcrumb={[{ label: "Form", url: "/form" }, { label: "Components", url: "/components" }]}
        />

      </Switch>
    </div>
  );
};

export default Routing;
