import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PrimeDataTable, {
  DataTableProps,
} from "../components/DataTable/DataTable";
import ApiService from "../services/ApiServices";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<any[]>([
  ]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await ApiService.get<any[]>(
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

  const dataTableProps: DataTableProps = {
    value: users,
    dynamicColumns: dynamicColumns,
    emptyMessage: "general.noRecordFound", // Example translation key for empty message
    rows: 10,
    sortable: true
  };

  return (
    <div className="datatable-demo">
      <PrimeDataTable {...dataTableProps} />
    </div>
  );
};

export default Dashboard;
