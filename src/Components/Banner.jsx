import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
        Bitrix420
      </h1>
      <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
        Meet the ultimate FREE ONLINE TASK MANAGER
      </h2>
      <p className="mt-4 text-gray-700 max-w-2xl">
        Since 2012, over 15,000,000 teams have been using Bitrix24 to manage
        their tasks and projects. Get the ultimate "get things done" tool for
        your company.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <span className="border border-blue-300 rounded-full px-4 py-2 text-blue-600">
          Kanban, Gantt, Scrum
        </span>
        <span className="border border-blue-300 rounded-full px-4 py-2 text-blue-600">
          Project management
        </span>
        <span className="border border-blue-300 rounded-full px-4 py-2 text-blue-600">
          Time tracking
        </span>
        <span className="border border-blue-300 rounded-full px-4 py-2 text-blue-600">
          Team collaboration
        </span>
        <span className="border border-pink-300 rounded-full px-4 py-2 text-pink-600">
          Work reports and KPIs
        </span>
        <span className="border border-purple-300 rounded-full px-4 py-2 text-purple-600">
          Task automation
        </span>
        <span className="border border-purple-300 rounded-full px-4 py-2 text-purple-600">
          AI in tasks
        </span>
      </div>
      <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
        Get Started
      </button>
    </div>
  );
};

export default Banner;
