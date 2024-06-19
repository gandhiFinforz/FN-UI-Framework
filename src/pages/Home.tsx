import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import React from "react";
import { Card } from "primereact/card";
import Dashboard from "./Dashboard";

interface Country {
  label: string;
  value: string;
}

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("general.appTitle")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t("general.appTitle")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="w">
          <Card title={t("usersTable.title")}>
            <Dashboard />
          </Card>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
