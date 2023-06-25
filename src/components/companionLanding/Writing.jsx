import React from "react";

function Writing() {
  return (
    <div className=" px-4 py-10 md:px-10 font-sans">
      <p className="text-center text-gray-600 pb-5 text-4xl md:text-6xl font-bold">
        One powerful platform
        <br /> for every PMO team
      </p>
      <p className="text-center text-gray-400 text-xl md:text-2xl">
        Task management is the link between planning to do something and getting it done. Your task management software should provide an overview of work in progress that enables tracking from conception to completion. Enter Companion: join teams everywhere who use our Kanban-style project boards to digitalize workflows and gain a clear overview of task progress. Lets get organized together!
      </p>
    </div>
  );
}

export default React.memo(Writing)
