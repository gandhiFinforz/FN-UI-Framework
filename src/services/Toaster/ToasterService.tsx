// ToastService.tsx
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToast } from '../../store/toastSlice';
import { Toast } from 'primereact/toast';
import { AppDispatch } from '../../store/store';

const ToastService: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const toastRef = useRef<Toast>(null);

  const showToast = (message: string, severity: 'success' | 'info' | 'warn' | 'error', life?: number) => {
    const id = new Date().getTime();
    dispatch(addToast({ id, message, severity, life }));
    toastRef.current?.show({ severity, summary: severity.toUpperCase(), detail: message, life });
  };

  return <Toast ref={toastRef} />;
};

export default ToastService;
