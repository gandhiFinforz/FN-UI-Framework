import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import FNButton from "../../components/Form/FNButton/FNButton";
import ApiService from "../../services/ApiServices";
import FNDataTable, { FNDataTableProps } from "../../components/Data/FNDataTable/FNDataTable";
import FNInputNumber from "../../components/Form/FNInputNumber/FNInputNumber";


const UserTable: React.FC = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<any[]>([
  ]);

  interface LoginFormValues {
    username: number | undefined;
    password: number | undefined;
  }

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

  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      username: undefined,
      password: undefined
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      
    },
  });

  const dataTableProps: FNDataTableProps = {
    value: users,
    dynamicColumns: dynamicColumns,
    emptyMessage: "general.noRecordFound", // Example translation key for empty message
    rows: 5,
    sortable: true
  };

  return (
    <div className="datatable-demo">

<div className="login-form">
          <form onSubmit={formik.handleSubmit}>
            <FNInputNumber
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              invalid={formik.touched.username && !!formik.errors.username}
              helpText={formik.touched.username && formik.errors.username}
            />

            <FNButton
              label="Login"
              type="submit"
              className="mt-3"
              loading={loading}
              disabled={loading}
            />
          </form>
        </div>


      <FNDataTable {...dataTableProps} />
    </div>
  );
};

export default UserTable;
