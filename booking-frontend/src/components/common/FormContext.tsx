import React, { createContext, useContext, useState } from 'react';

interface FormContextProps {
  isOpen: boolean;
  toggleForm: () => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FormContext.Provider value={{ isOpen, toggleForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
