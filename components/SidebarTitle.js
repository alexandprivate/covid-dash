import React from "react";
import { format } from "date-fns";

export default function SidebarTitle({ time }) {
  if (!time)
    return (
      <div className="space-y-3 py-2 animate-pulse">
        <div className="bg-gray-400  rounded-full w-1/2 h-3" />
        <div className="bg-gray-400  rounded-full w-full h-3" />
      </div>
    );
  console.log(new Date(time));
  return (
    <div className="space-y-1">
      <h2 className="text-xl">
        <span className="font-black">COVID-19</span> STATS
      </h2>
      <p className="text-xs text-gray-600">
        {format(new Date(time), "MM-dd-yyyy hh:mm:ss a")}
      </p>
    </div>
  );
}
