import React, { createContext, useCallback, useContext } from 'react';

interface ToastConstextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastConstextData>({} as ToastConstextData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastConstextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be user within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
