import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ApiService from "../../services/ApiServices";
import FNDataTable, { FNDataTableProps } from "../../components/Data/FNDataTable/FNDataTable";
import FNCard from "../../components/Panel/FNCard/FNCard";
 
const UserTable: React.FC = () => {
  useTranslation();
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
 
  const dataTableProps: FNDataTableProps = {
    value: users,
    dynamicColumns: dynamicColumns,
    emptyMessage: "general.noRecordFound", // Example translation key for empty message
    rows: 5,
    sortable: true
  };
 
  function onAccept(): void {
    console.log("bhavani u will get better future !..")
  }
 
  return (    
      <FNCard>
        <FNDataTable {...dataTableProps} />
        </FNCard>
  );
};
 
export default UserTable;