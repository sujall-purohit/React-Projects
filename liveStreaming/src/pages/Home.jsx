import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate()
  const [input, setInput] = useState('');

  const JoinMeeting = () =>{
    navigate(`/room/${input}`)

  }
  return (
    <div className="relative flex justify-center h-screen ">
      <div className="border-black fixed bottom-40  w-200 h-50  flex justify-center items-center  gap-10 backdrop-blur-xl border rounded-4xl shadow-[2px_2px_10px_black]">
        <input
          className="border-black shadow-[2px_2px_10px_black]  shadow-[black]  text-black w-[70%] h-15 rounded-4xl text-center outline-none"
          type="text"
          placeholder="Enter Room"
          value={input}
          onChange={(e) =>{
            setInput(e.target.value)
          }}
        />
        <button className="border-black shadow-[2px_2px_10px_black]  shadow-[black] bg-blue-400 text-white py-3 px-6 rounded-xl"
        onClick={JoinMeeting}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default Home;
