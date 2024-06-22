import React from 'react';

function SearchBar() {
  return (
    <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between w-4/6 sticky bottom-0 mt-10">
      <input type="text" placeholder="Enter your prompt" className=" h-10 outline-none rounded-lg px-4 mr-2" />
      <button className="bg-sky-900 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded">
        Enter
      </button>
    </div>
  );
}

export default SearchBar;