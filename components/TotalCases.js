import React from "react";
import Loader from "./Loader";
import CountUp from "react-countup";
export default function TotalCases({ data }) {
  return (
    <div className="bg-gray-200 shadow-lg rounded-2xl px-6 py-4 mt-4">
      <p className="text-gray-600">Total confirmed cases worldwide.</p>
      <h3 className="font-black text-4xl leading-tight">
        <CountUp end={data?.cases ?? 0} separator=" " />
      </h3>
    </div>
  );
}
