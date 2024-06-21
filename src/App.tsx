import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
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
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/themes/saga-purple/theme.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/themes/vela-green/theme.css';
import 'primereact/resources/themes/vela-orange/theme.css';
import 'primereact/resources/themes/vela-purple/theme.css';
import 'primereact/resources/themes/arya-blue/theme.css';
import 'primereact/resources/themes/arya-green/theme.css';
import 'primereact/resources/themes/arya-orange/theme.css';
import 'primereact/resources/themes/arya-purple/theme.css';      // Core CSS
import "primereact/resources/primereact.min.css"; // import styles
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { SetStateAction, Suspense, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { checkAuth } from "./store/authSlice";
import Dashboard from "./pages/Dashboard/Dashboard";
import FNThemeSidebar from "./components/ThemeSideBar/FNThemeSideBar";

setupIonicReact();
const App: React.FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const [theme, setTheme] = useState("saga-blue");

  useEffect(() => {
    const themeLink = document.getElementById("theme-css") as HTMLLinkElement;
    console.log(themeLink);
    
    themeLink.href = `primereact/resources/themes/${theme}/theme.css`;
  }, [theme]);

  const onThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div className="flex w-screen h-screen">{t("general.loading")}</div>
      }
    >
      <FNThemeSidebar onThemeChange={onThemeChange} />
      <I18nextProvider i18n={i18n}></I18nextProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/">
              {user ? <Redirect to="/dashboard" /> : <Login />}
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </Suspense>
  );
};

export default App;
