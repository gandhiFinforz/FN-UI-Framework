import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import FNCard from "../../Panel/FNCard/FNCard";
import "./FNDataTable.css";
export interface FNDataTableProps {
  alwaysShowPaginator?: boolean;
  breakpoint?: string;
  cellSelection?: boolean;
  checkIcon?: any;
  children?: React.ReactNode;
  className?: string;
  collapsedRowIcon?: any;
  columnResizeMode?: "expand" | "fit";
  compareSelectionBy?: "equals" | "deepEquals";
  contextMenuSelection?: object | null;
  currentPageReportTemplate?: string;
  dataKey?: string;
  dragSelection?: boolean;
  editingRows?: any[] | null;
  editMode?: "cell" | "row";
  emptyMessage?: React.ReactNode | Function | null | any;
  expandableRowGroups?: boolean;
  expandedRowIcon?: any;
  expandedRows?: any[] | null;
  exportFilename?: string;
  filterClearIcon?: any;
  filterDelay?: number;
  dynamicColumns?: { field: string; header: string }[];
  value: any[] | null;
  rows?: number;
  sortable?: boolean;
  globalFilterFields?: string[];
  header?: React.ReactNode;
  filter?: boolean;
  search?: boolean;
}

const FNDataTable: React.FC<FNDataTableProps> = ({
  alwaysShowPaginator = true,
  breakpoint = "960px",
  cellSelection = false,
  checkIcon = null,
  children = null,
  className = "",
  collapsedRowIcon = null,
  columnResizeMode = "fit",
  compareSelectionBy = "deepEquals",
  contextMenuSelection = null,
  currentPageReportTemplate = "({currentPage} of {totalPages})",
  dataKey = "id",
  dragSelection = false,
  editingRows = null,
  editMode = "cell",
  emptyMessage = "general.noRecordFound",
  expandableRowGroups = false,
  expandedRowIcon = null,
  expandedRows = null,
  exportFilename = "download",
  filterClearIcon = null,
  filterDelay = 300,
  dynamicColumns = [],
  value = [],
  rows = 10,
  sortable = false,
  globalFilterFields = [],
  header = null,
  filter = false,
  search = false,
}) => {
  const { t } = useTranslation();
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end mb-3">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText
            type="search"
            onInput={(e) => setGlobalFilter(e.currentTarget.value)}
            placeholder="Search..."
          />
        </IconField>
      </div>
    );
  };

  const calculateColumnClass = (numColumns: number) => {
    const colWidth = Math.floor(12 / numColumns);
    return `col-12 md:col-${colWidth}`;
  };

  return (
    <>
      {search && renderHeader()}
      {value && value.length > 0 ? (
        value.map((rowData) => (
          <FNCard key={rowData[dataKey]} className="mb-3 card-with-line">
            <div className="grid">
              {dynamicColumns.map((col,index) => (
                <div key={col.field} className={`${calculateColumnClass(dynamicColumns.length)} ${
                  index < dynamicColumns.length - 1 ? "column-with-border" : ""
                }`}>
                  <strong>{rowData[col.field]}</strong> 
                </div>
              ))}
            </div>
          </FNCard>
        ))
      ) : (
        <div>{t(emptyMessage)}</div>
      )}
    </>
  );
};

export default FNDataTable;
