import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (indx) => {
    const copyTask = [...task];
    copyTask.splice(indx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen px-4 flex lg:flex-row flex-col bg-black w-full text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" p-[30px] flex  gap-4 flex-col lg:w-1/2"
      >
        <h1 className=" text-4xl font-bold mb-2 ">Add Notes</h1>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="outline-none px-5 py-2 text-3xl border-2 border-white rounded"
          value={title}
          type="text"
          placeholder="Enter Notes Heading"
        />
        <textarea
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          value={details}
          className="outline-none text-2xl resize-none h-40 px-5 py-2 border-2 border-white rounded "
          placeholder="Write Details Here..."
        ></textarea>
        <button className="border-none active:bg-gray-300 py-2 rounded font-bold bg-white text-black">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 w-full p-[30px] lg:border-l-2 border-white ">
        <h1 className="text-4xl font-bold mb-2">Your Notes</h1>
        <div
          className=" card-container p-4 h-200 flex flex-wrap 
          gap-10 overflow-y-auto"
        >
          {task.map((elem, indx) => {
            return (
              <div
                key={indx}
                onClick={() => {
                  deleteNote(indx);
                }}
                className="card h-80 relative w-60 rounded-2xl p-4 bg-white"
              >
                <div className=" top-1 right-1 absolute bg-red-500 rounded-full h-6 w-6 text-center ">
                  <i className="text-white  ri-close-line"></i>
                </div>
                <h1 className="text-2xl text-black mb-3">{elem.title}</h1>
                <p className="text-sm text-black">{elem.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
