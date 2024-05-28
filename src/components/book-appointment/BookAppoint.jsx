import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Container from './components/Container.jsx';
import './styles/app.scss';

function BookAppoint() {
  const [appointment, setAppointment] = useState('');

  const updateAppointment = (ap) => {
    setAppointment(ap);
    // console.log(appointment);
  };

  return (
    <div className="app">
      <Header />
      <div className="py-4 px-96">
        <Container updateAppointment={updateAppointment} />
      </div>
    </div>
  );
}

export default BookAppoint;
