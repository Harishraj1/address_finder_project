import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import Framer Motion
import Navbar from '../layouts/navbar';
import globe from "../Assets/second-world.png";

function Home() {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleCheck = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch('http://localhost:5000/api/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address }),
      });

      const data = await response.json();
      setLoading(false); // Stop loading after fetch
      if (data.error) {
        setError(data.error);
      } else {
        navigate('/result', {
          state: {
            wrongAddress: address, // Passing wrong address
            correctAddress: data.formatted_address,
            longitude: data.lng,
            latitude: data.lat,
          },
        });
      }
    } catch (err) {
      setLoading(false); // Stop loading if there's an error
      console.error(err);
      setError('An error occurred while fetching the address.');
    }
  };

  // Framer Motion animation variants
  const headingAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="App">
      <Navbar />
      <div className="h-[100vh] w-full flex-wrap md:flex overflow-y-hidden">
        <div className='w-[50%] relative'>
          <img alt="globe-image" className="absolute left-[-30%] top-[8%] overflow-hidden transform scale-[1.1] -z-10" src={globe} />
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="flex flex-col items-center justify-center h-screen w-full space-y-8">
            {/* Apply the animation to the heading */}
            <motion.h1
              className="text-5xl font-bold caret-transparent"
              variants={headingAnimation}
              initial="hidden"
              animate="visible"
            >
              ADDRESS FINDER
            </motion.h1>

            <input
              placeholder="Enter your Address here"
              className="bg-white text-black p-4 text-xl font-bold block w-[80%] h-[70px] border-black placeholder-black"
              style={{ borderRadius: "8px", border: "3px solid black" }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button
              className="bg-black text-white text-lg font-bold block py-2 px-8 h-[60px] w-[180px] caret-transparent"
              style={{ borderRadius: "8px" }}
              onClick={handleCheck}
              disabled={loading} // Disable button when loading
            >
              {loading ? 'Loading...' : 'Search'} {/* Show loading text */}
            </button>
            {error && <p className="text-red-500 font-medium text-lg caret-transparent">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
