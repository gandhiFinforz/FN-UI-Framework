// Login.tsx

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputField from '../../components/InputField/InputField';
import AuthService from '../../services/AuthService';
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react'; // Import IonGrid, IonRow, IonCol
import FNButton from '../../components/Button/Button';
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';

const Login: React.FC = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const { t } = useTranslation();
    const handleLogin = async () => {
        setLoading(true);
        try {
            await AuthService.authenticate(username, password);
            history.push('/home'); // Redirect to home after successful login
        } catch (error) {
            console.error('Authentication failed:', error);
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter(e.target.value);
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonGrid> {/* Center align content */}
                    <IonRow className="ion-justify-content-center ion-">
                        <IonCol size="12" sizeSm="8" sizeMd="6"> {/* Responsive column sizes */}
                            <Card title={t('loginPage.title')} className="p-fluid">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <InputField
                                        type="text"
                                        label="loginPage.userName"
                                        size='sm'
                                        value={username}
                                        onChange={(e) => handleInputChange(e, setUsername)} name={''}                                    />
                                    <InputField
                                        type="password"
                                        label="loginPage.password"
                                        value={password}
                                        size='sm'
                                        onChange={(e) => handleInputChange(e, setPassword)} name={''}                                    />
                                    <FNButton
                                        size="small"
                                        label="loginPage.buttonName"
                                        className='mt-4'
                                        onClick={handleLogin}
                                        loading={isLoading}
                                        disabled={!username || !password || isLoading}
                                    />
                                </form>
                            </Card>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Login;
