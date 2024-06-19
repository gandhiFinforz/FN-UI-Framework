import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import AuthService from "../services/AuthService";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { logout } from "../store/authSlice";
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import AutoCompleteField from "../components/AutoCompleteField/AutoCompleteField";

interface Country {
  label: string;
  value: string;
}

const Home: React.FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState<Country | null>(null);
  const [filteredValues, setFilteredValues] = useState<Country[]>([]);

  // Sample data
  const countries: Country[] = [
    { label: "Australia", value: "AU" },
    { label: "Brazil", value: "BR" },
    { label: "Canada", value: "CA" },
    { label: "Denmark", value: "DK" },
    { label: "France", value: "FR" },
    { label: "Germany", value: "DE" },
    { label: "India", value: "IN" },
    { label: "Mexico", value: "MX" },
    { label: "United States", value: "US" },
  ];

  
  

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
      </IonContent>
    </IonPage>
  );
};

export default Home;
