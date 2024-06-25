import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "../../../components/ProtectedRoute/ProtectedRoute";
import UserTable from "../../Dashboard/UserTable";
import ErrorPage from "../../ErrorPage/ErrorPage";

const Routing: React.FC = (width) => {
  return (
    <div className="w-full mt-3 ml-2 px-3">
      <Switch>
        <ProtectedRoute
          exact
          path="/pageone1"
          component={UserTable}
          title="Page One 1"
          breadcrumb={[{ label: "Menu 1", url: "/pageone1" }, { label: "Page 1", url: "/pageone1" }]}
        />
        <ProtectedRoute
          exact
          path="/pageone2"
          component={UserTable}
          title="Page One 2"
          breadcrumb={[{ label: "Menu 1", url: "/pageone2" }, { label: "Page 2", url: "/pageone2" }]}
        />
        <ProtectedRoute
          exact
          path="/pageone3"
          component={UserTable}
          title="Page One 3"
          breadcrumb={[{ label: "Menu 1", url: "/pageone3" }, { label: "Page 3", url: "/pageone3" }]}
        />
        <ProtectedRoute
          exact
          path="/pagetwo1"
          component={UserTable}
          title="Page Two 1"
          breadcrumb={[{ label: "Menu 2", url: "/pagetwo1" }, { label: "Page 1", url: "/pagetwo1" }]}
        />
        <ProtectedRoute
          exact
          path="/menu3"
          component={UserTable}
          title="Menu 3"
          breadcrumb={[{ label: "Menu 3", url: "/menu3" }]}
        />
       
      </Switch>
    </div>
  );
};

export default Routing;
