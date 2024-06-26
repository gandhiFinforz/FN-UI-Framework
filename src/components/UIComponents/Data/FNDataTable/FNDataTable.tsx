import React from 'react';
import { DataTable, DataTableProps } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useTranslation } from 'react-i18next';

export interface FNDataTableProps{
    alwaysShowPaginator?: boolean;
    breakpoint?: string;
    cellSelection?: boolean;
    checkIcon?: any;
    children?: React.ReactNode;
    className?: string;
    collapsedRowIcon?: any;
    columnResizeMode?: 'expand' | 'fit';
    compareSelectionBy?: 'equals' | 'deepEquals';
    contextMenuSelection?: object | null;
    currentPageReportTemplate?: string;
    dataKey?: string;
    defaultSortOrder?: null | 0 | 1 | -1;
    dragSelection?: boolean;
    editingRows?: any[] | null;
    editMode?: 'cell' | 'row';
    emptyMessage?: React.ReactNode | Function | null | any;
    expandableRowGroups?: boolean;
    expandedRowIcon?: any;
    expandedRows?: any[] | null;
    exportFilename?: string;
    filterClearIcon?: any;
    filterDelay?: number;
    dynamicColumns?: { field: string; header: string }[];
    value: any[] | null;
    rows?:number;
    sortable?:boolean;
}

const FNDataTable: React.FC<FNDataTableProps> = ({
    alwaysShowPaginator = true,
    breakpoint = '960px',
    cellSelection = false,
    checkIcon = null,
    children = null,
    className = '',
    collapsedRowIcon = null,
    columnResizeMode = 'fit',
    compareSelectionBy = 'deepEquals',
    contextMenuSelection = null,
    currentPageReportTemplate = '({currentPage} of {totalPages})',
    dataKey = '',
    defaultSortOrder = null,
    dragSelection = false,
    editingRows = null,
    editMode = 'cell',
    emptyMessage = 'general.noRecordFound',
    expandableRowGroups = false,
    expandedRowIcon = null,
    expandedRows = null,
    exportFilename = 'download',
    filterClearIcon = null,
    filterDelay = 300,
    dynamicColumns = [],
    value = [],
    rows=10,
    sortable = false
}) => {
    const { t } = useTranslation();
    return (
        <DataTable
            value={value}
            paginator ={alwaysShowPaginator}
            breakpoint={breakpoint}
            cellSelection={cellSelection}
            checkIcon={checkIcon}
            className={className}
            collapsedRowIcon={collapsedRowIcon}
            columnResizeMode={columnResizeMode}
            compareSelectionBy={compareSelectionBy}
            contextMenuSelection={contextMenuSelection}
            currentPageReportTemplate={currentPageReportTemplate}
            dataKey={dataKey}
            defaultSortOrder={defaultSortOrder}
            dragSelection={dragSelection}
            editingRows={editingRows}
            editMode={editMode}
            emptyMessage={t(emptyMessage)}
            expandableRowGroups={expandableRowGroups}
            expandedRowIcon={expandedRowIcon}
            expandedRows={expandedRows}
            exportFilename={exportFilename}
            filterClearIcon={filterClearIcon}
            filterDelay={filterDelay}
            rows={rows}
        >
            {dynamicColumns.map((col) => (
                <Column sortable={sortable} key={col.field} field={col.field} header={t(col.header)} />
            ))}
            {children}
        </DataTable>
    );
};

export default FNDataTable;
