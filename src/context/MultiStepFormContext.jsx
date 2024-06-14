import { createContext, useState } from 'react';

export const NewBookingFormContext = createContext({
  details: null,
  updatePropertyForm: () => null,
});
export function BookingFormContextProvider({ children }) {
  const [details, setDetails] = useState(null);

  const updateUserData = (values) => {
    setDetails({ ...details, ...values });
  };

  return (
    <NewBookingFormContext.Provider value={{ details, updateUserData }}>
      {children}
    </NewBookingFormContext.Provider>
  );
}
