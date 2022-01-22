import React from "react";
import CountUp from "react-countup";

function Skeleton() {
  return (
    <div className="space-y-4">
      <div className="bg-gray-300">
        <div className="h-12 w-full rounded-full border border-gray-400"></div>
      </div>
      {new Array(10).fill("").map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 mb-3 shadow-lg rounded-xl px-6 py-4"
        >
          <div className="h-3 bg-gray-300 w-1/2 mb-4 rounded-full animate-pulse mt-5"></div>
          <div className="flex justify-between space-x-4 mb-5">
            <div className="h-3 bg-gray-300 w-full rounded-full animate-pulse"></div>
            <div className="h-3 bg-gray-300 w-full rounded-full animate-pulse"></div>
            <div className="h-3 bg-gray-300 w-full rounded-full animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Stat({ title, children }) {
  return (
    <div className="flex-1">
      <h6 className="text-sm text-gray-600">{title}</h6>
      <p className="font-bold">
        <CountUp end={children} separator=" "></CountUp>
      </p>
    </div>
  );
}

export default function Countries({ data = [], loading }) {
  const [searchKey, setSearchKey] = React.useState("");

  const filteredData = searchKey
    ? data?.filter(({ country }) =>
        country?.toLowerCase()?.includes(searchKey?.toLowerCase())
      )
    : data;

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-300 flex items-center">
        <input
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          type="text"
          className="h-12 border rounded-full w-full bg-transparent border-gray-400 outline-gray-600 px-5 text-lg appearance-none capitalize"
        />
        {searchKey && (
          <button
            onClick={() => setSearchKey("")}
            className="absolute right-10 text-xl text-gray-600"
          >
            &times;
          </button>
        )}
      </div>
      {filteredData.map((item, i) => (
        <div
          key={i}
          className="bg-gray-200 mb-3 shadow-lg rounded-xl px-6 py-4"
        >
          <h5 className="font-bold text-lg mb-2">{item.country}</h5>
          <div className="flex justify-between space-y-2 sm:space-y-0 sm:space-x-2 flex-col sm:flex-row">
            <Stat title="Total Cases">{item.cases}</Stat>
            <Stat title="Recovered">{item.recovered}</Stat>
            <Stat title="Deaths">{item.deaths}</Stat>
          </div>
        </div>
      ))}
    </div>
  );
}
