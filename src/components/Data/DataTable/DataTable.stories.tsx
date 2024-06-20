// DataTable.stories.tsx

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import PrimeDataTable, { DataTableProps } from './DataTable'; // Adjust path as needed

export default {
  title: 'Components/Data/DataTable',
  component: PrimeDataTable,
  tags: ['autodocs'],
  argTypes: {
    // Define argTypes if needed
  },
} as Meta;

// Sample data for the table
const sampleData = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  // Add more data as needed
];

// Template for a basic DataTable
const Template: StoryFn<DataTableProps> = (args) => <PrimeDataTable {...args} />;

// Basic DataTable with dynamic columns and sample data
export const BasicDataTable = Template.bind({});
BasicDataTable.args = {
  alwaysShowPaginator: false,
  breakpoint: '960px',
  dynamicColumns: [
    { field: 'name', header: 'Name' },
    { field: 'age', header: 'Age' },
    // Add more columns as needed
  ],
  value: sampleData, // Provide the sample data here
  filterDelay: 300, // Example of other props
  // Add other props as needed
};

// DataTable with no data
export const EmptyDataTable = Template.bind({});
EmptyDataTable.args = {
  alwaysShowPaginator: false,
  breakpoint: '960px',
  dynamicColumns: [
    { field: 'name', header: 'storiesSample.name' },
    { field: 'age', header: 'storiesSample.age' },
  ],
  value: [], // Empty array when no data
  emptyMessage: 'general.noRecordFound',
  filterDelay: 300, // Example of other props
  // Add other props as needed
};

// DataTable with pagination
export const DataTableWithPagination = Template.bind({});
DataTableWithPagination.args = {
  alwaysShowPaginator: true,
  breakpoint: '960px',
  dynamicColumns: [
    { field: 'name', header: 'storiesSample.name' },
    { field: 'age', header: 'storiesSample.age' },
  ],
  value: sampleData, // Provide the sample data here
  rows: 10,
  filterDelay: 300, 
};

// DataTable with sorting
export const DataTableWithSorting = Template.bind({});
DataTableWithSorting.args = {
  alwaysShowPaginator: true,
  sortable:true,
  breakpoint: '960px',
  dynamicColumns: [
    { field: 'name', header: 'storiesSample.name' },
    { field: 'age', header: 'storiesSample.age' },
  ],
  value: sampleData, // Provide the sample data here
  rows: 10,
  filterDelay: 300, 
};