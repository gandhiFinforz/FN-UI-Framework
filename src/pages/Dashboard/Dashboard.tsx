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
import UserTable from "./UserTable";

const Dashboard: React.FC = () => {
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
        <div className="w-10 flex mt-3 justify-content-center">
          <Card title={t("usersTable.title")}>
            <UserTable/>
          </Card>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
