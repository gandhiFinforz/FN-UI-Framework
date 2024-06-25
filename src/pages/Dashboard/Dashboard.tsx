import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import React from "react";
import UserTable from "./UserTable";
import FNCard from "../../components/Panel/FNCard/FNCard";
import FNAccordion, {
  TabData,
} from "../../components/Panel/FNAccordion/FNAccordion";
const Dashboard: React.FC = () => {

  const stepsModel = [
    { label: 'Step 1', icon: 'pi pi-user' },
    { label: 'Step 2', icon: 'pi pi-briefcase', command: () => console.log('Step 2 clicked') },
    { label: 'Step 3', icon: 'pi pi-check' },
  ];

  const { t } = useTranslation();

  const tabs: TabData[] = [
    { header: "Header 1", content: "Content for the first tab" },
    { header: "Header 2", content: "Content for the second tab" },
    {
      header: "Header 3",
      content: "Content for the third tab",
      disabled: true,
    },
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* accordion element */}
        <div className="m-3">
          <FNAccordion tabs={tabs} />
        </div>
        {/* end */}
        <div className="w-10 flex mt-3 justify-content-center">
          <FNCard title={t("usersTable.title")}>
            <UserTable />
          </FNCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
