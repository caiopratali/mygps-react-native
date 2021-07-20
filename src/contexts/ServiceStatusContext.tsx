import {createContext, useContext} from 'react';

export type GlobalContent = {
  selectedTime: number;
  setSelectedTime: (c: number) => void;
  isEnabled: boolean;
  setIsEnabled: (c: boolean) => void;
};

export const ServiceStatusContext = createContext<GlobalContent>({
  selectedTime: 10,
  setSelectedTime: () => {},
  isEnabled: false, // set a default value
  setIsEnabled: () => {},
});

export const useServiceStatusContext = () => useContext(ServiceStatusContext);
