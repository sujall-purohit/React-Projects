import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <div className="flex justify-center items-center w-full h-full">
      <h3 className="text-gray-400 text-lg animate-pulse">Loading...</h3>
    </div>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <a
          key={idx}
          href={elem.url}
          target="_blank"
          className="group relative w-60 rounded-2xl overflow-hidden shadow-lg bg-zinc-900"
        >
          {/* Image */}
          <div className="h-44 w-full overflow-hidden">
            <img
              className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
              src={elem.download_url}
              alt=""
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />

          {/* Author */}
          <div className="p-3">
            <h2 className="font-semibold text-sm tracking-wide">
              {elem.author}
            </h2>
          </div>
        </a>
      );
    });
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center py-4">
        Image Gallery
      </h1>

      {/* Grid */}
      <div className="flex flex-wrap justify-center gap-6 p-6 flex-1">
        {printUserData}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 pb-6">
        <button
          disabled={index === 1}
          className="bg-amber-400 disabled:opacity-40 text-black rounded-lg px-5 py-2 font-semibold active:scale-95 transition"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>

        <h4 className="text-lg font-semibold">Page {index}</h4>

        <button
          className="bg-amber-400 text-black rounded-lg px-5 py-2 font-semibold active:scale-95 transition"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;