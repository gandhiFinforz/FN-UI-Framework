import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppDispatch, RootState } from "../../store/store";
import { useTranslation } from "react-i18next";
import ApiService from "../../services/ApiServices";
import FNDataTable, {
  FNDataTableProps,
} from "../../components/Data/FNDataTable/FNDataTable";
import FNCard from "../../components/Panel/FNCard/FNCard";
import { urlConfig } from "../../services/Utils/ApiUrlConfig";
import FNButton from "../../components/Form/FNButton/FNButton";
import FNInputSwitch from "../../components/Form/FNInputSwitch/FNInputSwitch";


const UserTable: React.FC = () => {
  useTranslation();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await ApiService.get<any[]>(urlConfig.userList);
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
    { field: "createdAt", header: "Created At" },
  ];
 
  const dataTableProps: FNDataTableProps = {
    value: users,
    dynamicColumns: dynamicColumns,
    emptyMessage: "general.noRecordFound", // Example translation key for empty message
    rows: 5,
    sortable: true,
  };

  interface LoginFormValues {
    activeBox: boolean;
  }

  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      activeBox: false,
    },
    validationSchema: Yup.object({
      activeBox: Yup.boolean().required("Active is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      
    },
  });

  return (
    <FNCard title="User Table">

<form onSubmit={formik.handleSubmit}>
      <FNInputSwitch
          name="activeBox"
          label="Active"
          checked={formik.values.activeBox}
          onChange={(e) => formik.setFieldValue("activeBox", e.value)}
          onBlur={formik.handleBlur}
          invalid={formik.touched.activeBox && !!formik.errors.activeBox}
          helpText={formik.touched.activeBox && formik.errors.activeBox}
        />

            {error && <div className="error text-red-400">{error}</div>}

            <FNButton
              label="Login"
              type="submit"
              className="mt-3"
              loading={loading}
              disabled={loading}
            />
          </form>


      <FNDataTable {...dataTableProps} />
    </FNCard>
  );
};
 
export default UserTable;