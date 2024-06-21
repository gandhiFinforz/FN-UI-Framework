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
import StepsMenu from "../../components/Menu/FNSteps/FNSteps";

const Dashboard: React.FC = () => {

  const stepsModel = [
    { label: 'Step 1', icon: 'pi pi-user' },
    { label: 'Step 2', icon: 'pi pi-briefcase', command: () => console.log('Step 2 clicked') },
    { label: 'Step 3', icon: 'pi pi-check' },
  ];

  const { t } = useTranslation();

  const handleSelect = (event: { index: number }) => {
    console.log(`Step ${event.index + 1} selected`);
  };

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
        <div>
        <StepsMenu model={stepsModel} initialIndex={0} onSelect={handleSelect} readOnly={false} />
        </div>
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
