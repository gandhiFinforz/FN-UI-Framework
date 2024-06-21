import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const FNThemeSidebar = ({ onThemeChange }) => {
    const [visible, setVisible] = useState(false);

    const themes = [
        'saga-blue', 'saga-green', 'saga-orange', 'saga-purple',
        'vela-blue', 'vela-green', 'vela-orange', 'vela-purple',
        'arya-blue', 'arya-green', 'arya-orange', 'arya-purple'
    ];

    return (
        <div>
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} />
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h3>Select a Theme</h3>
                <ul>
                    {themes.map((theme) => (
                        <li key={theme}>
                            <Button label={theme} onClick={() => onThemeChange(theme)} />
                        </li>
                    ))}
                </ul>
            </Sidebar>
        </div>
    );
};

export default FNThemeSidebar;
