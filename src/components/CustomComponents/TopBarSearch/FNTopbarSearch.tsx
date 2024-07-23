// src/customcomponents/FNTopbarSearch/FNTopbarSearch.tsx

import React, { useState, ChangeEvent, useEffect } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import FNInput from '../../UIComponents/Form/FNInput/FNInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useDebounce from './useDebounce'; // Import debounce hook

interface SidebarProps {
    items: string[];
    onChangeEvent?: (e: any) => void;
}

const FNTopbarSearch: React.FC<SidebarProps> = ({ items }) => {
    const [visible, setVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<string[]>(items);
    const debouncedSearchTerm = useDebounce(searchTerm, 300); 
    
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    const filterItems = (term: string) => {
        const filtered = items.filter(item =>
            item?.toLowerCase().includes(term?.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    const searchFormik = useFormik<any>({
        initialValues: {
            search: ''
        },
        validationSchema: Yup.object({
            search: Yup.string().required('Search is required')
        }),
        onSubmit: (values: any) => {}
    });

    useEffect(() => {
        filterItems(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    return (
        <div className="card">
            <div className="flex gap-2 justify-content-center m-3 absolute right-0 top-0">
                <Button type="button" icon="pi pi-search" onClick={() => setVisible(true)} />
            </div>
            <Sidebar visible={visible} position="top" onHide={() => setVisible(false)}>
                <div className=" global-search-bar">
                    <form onSubmit={searchFormik.handleSubmit} className="grid">
                        <div className="p-col-fixed">
                            <div className="mx-4">
                                <FNInput
                                    type="text"
                                    name="search"
                                    label=" "
                                    helpText=""
                                    className=""
                                    placeholder="Search"
                                    onChange={handleSearchChange}
                                />
                                
                            </div>
                            <div>
                                <ul>
                                    {filteredItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </Sidebar>
        </div>
    );
};

export default FNTopbarSearch;
