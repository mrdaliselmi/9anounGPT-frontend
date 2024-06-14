import { useContext } from 'react';
import { NewBookingFormContext } from '@/context/MultiStepFormContext';

export const useNewBookingFormContext = () => {
  const context = useContext(NewBookingFormContext);
  if (!context) {
    throw new Error(
      'useNewBookingFormContext must be used within a NewBookingFormContextProvider',
    );
  }

  return context;
};
