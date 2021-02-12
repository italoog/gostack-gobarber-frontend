import React, { createContext, useCallback, useContext, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastConstextData {
  addToast(massage: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastConstextData>({} as ToastConstextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuidv4();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((state) => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
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