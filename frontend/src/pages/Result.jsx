import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import Navbar from '../layouts/navbar';
import globe from "../Assets/second-world.png";

const Result = () => {
  const location = useLocation();
  const { correctAddress, wrongAddress, longitude, latitude } = location.state || {};

  // Function to open Google Maps with the given latitude and longitude
  const openInGoogleMaps = () => {
    if (latitude && longitude) {
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      window.open(url, '_blank');
    }
  };

  // Globe animation variant
  const globeVariants = {
    initial: { x: '-100vw' },  // Start globe from the left (off-screen)
    animate: {
      x: 0,  // Move to the center
      transition: { type: 'spring', stiffness: 50 }
    },
    exit: { x: '100vw' }    // Exit to the right (off-screen)
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Fade-in/out effect for the entire page
    >
      <Navbar />
      <div className="h-[100vh] w-full flex flex-wrap md:flex overflow-y-hidden overflow-x-hidden">
        {/* Left Section */}
        <div className="w-full md:w-[50%] pt-20 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center h-full w-full space-y-10 p-4">
            <div className="w-full max-w-[500px]">
              <h1 className="text-left text-2xl font-medium pb-2">Your Address</h1>
              <textarea
                className="w-full max-h-[300px] rounded p-4 bg-white text-black text-xl font-bold block h-[70px] border-black placeholder-black"
                placeholder="Your entered address"
                value={wrongAddress || ''}
                readOnly
                style={{ borderRadius: "8px", border: "3px solid black" }} // Same style as input in Home.jsx
              ></textarea>
            </div>

            <div className="w-full max-w-[500px]">
              <h1 className="text-left text-2xl font-medium pb-2">Correct Address</h1>
              <textarea
                className="w-full max-h-[300px] rounded p-4 bg-white text-black text-xl font-bold block h-[70px] border-black placeholder-black"
                placeholder="Corrected address"
                value={correctAddress || ''}
                readOnly
                style={{ borderRadius: "8px", border: "3px solid black" }} // Same style as input in Home.jsx
              ></textarea>
            </div>

            <div className="w-full flex flex-col items-start gap-2 space-y-2 max-w-[500px]">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <h3 className="font-medium text-2xl text-black">Latitude:</h3>
                  <p className="font-medium text-2xl text-black ml-4">{latitude || 'N/A'}</p>
                </div>
                <div className="flex items-center ml-8"> {/* Adjusted margin for better alignment */}
                  <h3 className="font-medium text-2xl text-black">Longitude:</h3>
                  <p className="font-medium text-2xl text-black ml-4">{longitude || 'N/A'}</p>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <button
                className="bg-black text-white text-lg font-bold py-4 px-8"
                style={{ borderRadius: "8px" }}
                onClick={openInGoogleMaps}
              >
                Open in Map
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-[50%] relative -z-10">
          <motion.img
            alt="globe-image"
            className="absolute right-[-30%] top-0 w-full h-full object-cover"
            src={globe}
            variants={globeVariants} // Add motion variants to the image
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Result;
