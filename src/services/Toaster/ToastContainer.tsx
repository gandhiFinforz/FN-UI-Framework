// ToastContainer.tsx
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import { RootState, AppDispatch } from '../../store/store';
import { removeToast } from '../../store/toastSlice';

const ToastContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const toasts = useSelector((state: RootState) => state.toast);
  const toastRef = useRef<Toast>(null);

  useEffect(() => {
    toasts.forEach((toast: any) => {
      toastRef.current?.show({
        severity: toast.severity,
        summary: toast.severity.toUpperCase(),
        detail: toast.message,
        life: toast.life || 3000,
      });
      setTimeout(() => {
        dispatch(removeToast(toast.id));
      }, toast.life || 3000);
    });
  }, [toasts, dispatch]);

  return <Toast ref={toastRef} />;
};

export default ToastContainer;
