import React from 'react';
import profile from '../assets/profile.jpg'; // Ensure this path is correct

const Home = () => {
  const candidateDetails = {
    name: 'John Doe',
    roomNumber: '101',
    sharing: '3',
    email: 'johndoe@example.com',
    aadhaarNumber: '1234-5678-9012',
    address: '123, Main Street, Cityville, State, PIN - 456789',
  };

  return (
    <div className='flex flex-col sm:flex-col md:flex-row'>
      <div className=''>
        <img className='size-[300px] rounded-full shadow-black' src={profile} alt="Profile"  />
        </div>
        <div className=''>
        <h1 >Candidate Details</h1>
        <p><strong>Name:</strong> {candidateDetails.name}</p>
        <p><strong>Room Number:</strong> {candidateDetails.roomNumber}</p>
        <p><strong>Type of Sharing:</strong> {candidateDetails.sharing}</p>
        <p><strong>Email:</strong> {candidateDetails.email}</p>
        <p><strong>Aadhaar Number:</strong> {candidateDetails.aadhaarNumber}</p>
        <p><strong>Address:</strong> {candidateDetails.address}</p>
      </div>
    </div>
  );
};

export default Home;
