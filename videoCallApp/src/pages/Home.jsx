import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate()
  const [input, setInput] = useState('');

  const JoinMeeting = () =>{
    navigate(`/room/${input}`)

  }
  return (
    <div className="flex justify-center  h-screen ">
      <div className="border-white w-100 h-50 mt-5  flex justify-center items-center flex-col gap-10 backdrop-blur-xl border rounded-4xl shadow-[2px_2px_10px_black]">
        <input
          className="border-white  shadow-[2px_2px_10px_white]  text-white w-[80%] h-15 rounded-4xl text-center outline-none"
          type="text"
          placeholder="Enter Room ID"
          value={input}
          onChange={(e) =>{
            setInput(e.target.value)
          }}
        />
        <button className="border-white  shadow-[2px_2px_10px_white] text-white p-3 rounded-xl"
        onClick={JoinMeeting}
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Home;
