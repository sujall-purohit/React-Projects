import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  // ✅ load from localStorage BEFORE first render
  const [task, setTask] = useState(() => {
    const stored = localStorage.getItem("notes");
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ save to localStorage whenever task changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(task));
  }, [task]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={submitHandler}
        className="flex lg:w-1/2 gap-4 p-10 items-start flex-col"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-2 border-2 rounded outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter Details"
          className="px-5 h-20 w-full py-2 border-2 rounded outline-none"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="bg-white text-black px-5 py-2 rounded w-full outline-none active:bg-gray-400">
          Add Note
        </button>
      </form>

      <div className="p-10 lg:border-l-2 lg:w-1/2">
        <h1 className="text-4xl font-bold">Your Notes</h1>

        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 bg-cover rounded-xl text-black bg-white p-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <button
                  onClick={() => deleteNote(idx)}
                  className="absolute top-5 right-5"
                >
                  <X />
                </button>

                <h3 className="leading-tight text-xl font-bold mt-5">
                  {elem.title}
                </h3>

                <p className="mt-4 leading-tight font-medium text-gray-500">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;