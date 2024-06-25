import { IonApp, setupIonicReact } from "@ionic/react";
// In your main application file

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

import 'primereact/resources/themes/saga-blue/theme.css';
      // Core CSS
import "primereact/resources/primereact.min.css"; // import styles
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Login from "./pages/Login/Login";
import { Suspense, useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { checkAuth } from "./store/authSlice";
import './App.css';
import FNThemeSidebar from "./components/ThemeSideBar/FNThemeSideBar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Layout from "./pages/Layout/Layout";

setupIonicReact();
const App: React.FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div className="flex w-screen h-screen">{t("general.loading")}</div>
      }
    >
      <FNThemeSidebar />
      <I18nextProvider i18n={i18n}></I18nextProvider>
      <IonApp className="m-0 justify-content-start">
        <BrowserRouter>
          <Switch>
            <ProtectedRoute exact path="/pageone1" component={Layout} />
            <Route exact path="/">
              {user ? <Redirect to="/pageone1" /> : <Login />}
            </Route>
            <ProtectedRoute component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </IonApp>
    </Suspense>
  );
};

export default App;
