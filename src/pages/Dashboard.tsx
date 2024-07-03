import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ApiServices from "../services/ApiServices";
import FNDataTable, {
  FNDataTableProps,
} from "../components/UIComponents/Data/FNDataTable/FNDataTable";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<any[]>([
  ]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await ApiServices.get<any[]>(
          "/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Define columns dynamically based on your API response
  const dynamicColumns = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "phonenumber", header: "Phone Number" },
    { field: "createdAt", header: "Created At" }
  ];

  const dataTableProps: FNDataTableProps = {
    value: users,
    dynamicColumns: dynamicColumns,
    emptyMessage: "general.noRecordFound", // Example translation key for empty message
    rows: 10,
    sortable: true,
  };

  return (
    <div className="datatable-demo">
      <FNDataTable {...dataTableProps} />
    </div>
  );
};

export default Dashboard;
