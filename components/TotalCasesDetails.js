import React from "react";
import CountUp from "react-countup";

function Details({ title, data, percent }) {
  return (
    <div className="flex-1 pl-3">
      <div className="text-gray-600">
        <p>{title}</p>
        <h4 className="text-gray-800 font-bold text-lg">
          <CountUp end={data ?? 0} separator=" " />
        </h4>
        <p className="text-xs">
          <CountUp end={percent ?? 0} decimals={2} decimal="." suffix="%" />
        </p>
      </div>
    </div>
  );
}

export default function TotalCasesDetails({ data }) {
  const getPercent = (part) =>
    parseFloat((part / data?.cases) * 100).toFixed(2);
  return (
    <div className="flex items-center justify-between mt-6 divide-x-2 divide-gray-400">
      <Details
        title="Recovered"
        data={data?.recovered ?? 0}
        percent={getPercent(data?.recovered ?? 0)}
      ></Details>
      <Details
        title="Active"
        data={data?.active}
        percent={getPercent(data?.active ?? 0)}
      ></Details>
      <Details
        title="Deaths"
        data={data?.deaths}
        percent={getPercent(data?.deaths ?? 0)}
      ></Details>
    </div>
  );
}
