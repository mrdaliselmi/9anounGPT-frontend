import React, { useState } from 'react';
import Container from './components/Container.jsx';
import './styles/app.scss';

function BookAppoint() {
  const [appointment, setAppointment] = useState('');

  const updateAppointment = (ap) => {
    setAppointment(ap);
  };

  return (
    <div className="app flex justify-center items-center bg-[#F1F1F1]">
      <div className="my-16 mx-auto">
        <Container updateAppointment={updateAppointment} />
      </div>
    </div>
  );
}

export default BookAppoint;
