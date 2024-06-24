
import React from "react";
import ProtectedRoute from "../../../components/ProtectedRoute/ProtectedRoute";
import UserTable from "../../Dashboard/UserTable";
import { Switch, Route, Redirect } from "react-router";
import ErrorPage from "../../ErrorPage/ErrorPage";

const Routing: React.FC = () => {
  return (
    <div className="w-10 mt-3">
        <Switch>
          <ProtectedRoute exact path="/pageone1" component={UserTable} />
          <ProtectedRoute exact path="/pageone2" component={UserTable} />
          <ProtectedRoute exact path="/pageone3" component={UserTable} />
          <ProtectedRoute exact path="/pagetwo1" component={UserTable} />
          <ProtectedRoute exact path="/menu3" component={UserTable} />
          <Route exact path="/">
            <Redirect to="/pageone1" /> {/* Default route */}
          </Route>
          <Route component={ErrorPage} /> {/* This will handle unmatched routes */}
        </Switch>
    </div>
  );
};

export default Routing;
