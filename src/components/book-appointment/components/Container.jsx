import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/container.scss';
import listOfProfessionals from '../data/listOfProfessionals.js';
import Item from './Item.jsx';
import ProfileSelection from './ProfileSelection.jsx';
import BookingSelection from './BookingSelection.jsx';
import BookingSubmission from './BookingSubmission.jsx';

function Container({ updateAppointment }) {
  const [selectedProfile, setSelectedProfile] = useState(
    listOfProfessionals[0],
  );
  const [selectedTime, setSelectedTime] = useState('');

  const updateSelectedProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const updateSelectedTime = (dateTime) => {
    setSelectedTime(dateTime);
  };

  return (
    <div className="container p-0 !max-w-[450px]">
      <div className=" rounded-t-lg py-4 bg-gray-300 ">
        <h3 className="text-lg font-semibold">Book your appointment online</h3>
        <h4 className="text-sm">Fill in the following information</h4>
      </div>
      <div className="container-body">
        <Item
          number={1}
          title="Select one of our professionals"
          profileList={listOfProfessionals}
          body={
            <ProfileSelection
              profileList={listOfProfessionals}
              updateSelectedProfile={updateSelectedProfile}
              selectedProfile={selectedProfile}
            />
          }
        />
        <Item
          number={2}
          title="Pick an appointment time"
          body={
            <BookingSelection
              profileList={listOfProfessionals}
              updateSelectedProfile={updateSelectedProfile}
              selectedProfile={selectedProfile}
              updateSelectedTime={updateSelectedTime}
              selectedTime={selectedTime}
            />
          }
        />
        <Item
          number={3}
          title="Confirm your booking"
          body={
            <BookingSubmission
              selectedProfile={selectedProfile}
              selectedTime={selectedTime}
              updateAppointment={updateAppointment}
            />
          }
        />
      </div>
    </div>
  );
}

export default Container;

Container.propTypes = {
  updateAppointment: PropTypes.func.isRequired,
};
