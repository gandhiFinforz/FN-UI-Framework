import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ApiService from "../../services/ApiServices";
import FNDataTable, {
  FNDataTableProps,
} from "../../components/UIComponents/Data/FNDataTable/FNDataTable";
import FNCard from "../../components/UIComponents/Panel/FNCard/FNCard";
import { Button } from "primereact/button";
import FNDialog from "../../components/UIComponents/Panel/FNDialog/FNDialog";
import { t } from "i18next";
import { urlConfig } from "../../services/Utils/ApiUrlConfig";

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  useTranslation();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await ApiService.get<any[]>(urlConfig.userList);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // fetchUsers();
  }, []);

  // Define columns dynamically based on your API response
  const dynamicColumns = [
    { field: "id", header: "ID" },
    { field: "firstName", header: "Name" },
    { field: "email", header: "Email" }
  ];

  const dataTableProps: FNDataTableProps = {
    value: users,
    dynamicColumns: dynamicColumns,
    emptyMessage: "general.noRecordFound", // Example translation key for empty message
    rows: 5,
    sortable: true,
    globalFilterFields: ["id", "name", "phonenumber", "createdAt"],
    filter: true,
    search: true,
  };

  // show and hide dialog component
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* dialog component content */}
      <div className="card flex justify-content-end mb-2">
        <Button
          label={t("Dialog.buttonLabel")}
          icon="pi pi-external-link"
          onClick={() => setVisible(true)}
        />
        <FNDialog
          header={t("Dialog.header")}
          content="Are you sure you want add more users..!"
          footerButtons={[
            {
              label: t("Dialog.rejectButton"),
              icon: "pi pi-times",
              onClick: () => setVisible(false),
              className: "p-button-text",
            },
            {
              label: t("Dialog.confirmButton"),
              icon: "pi pi-check",
              onClick: () => setVisible(false),
            },
          ]}
          visible={visible}
          onHide={() => setVisible(false)}
          style={{ width: "40vw" }}
          className="my-custom-dialog"
        />
      </div>
      {/* dialog component content end */}

      <FNCard title="User Table">
        <FNDataTable {...dataTableProps} />
      </FNCard>
    </div>
  );
};

export default UserTable;
