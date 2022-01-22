import React from "react";
import SidebarTitle from "./SidebarTitle";
import TotalCases from "./TotalCases";
import TotalCasesDetails from "./TotalCasesDetails";
import Countries from "./Countries";
import useFetch from "../hooks/useFetch";
export default function Sidebar({ countries, loadingCountries }) {
  const { data } = useFetch("https://corona.lmao.ninja/v2/all");

  return (
    <div className="h-screen w-full max-w-md py-4 pl-6 pr-5 mr-1 overflow-auto relative block pb-40 space-y-6">
      <SidebarTitle time={data?.updated} />
      <TotalCases data={data} />
      <TotalCasesDetails data={data} />
      <Countries data={countries} loading={loadingCountries} />
      <div className="h-40 bg-gradient-to-t from-gray-300 to-transparent fixed bottom-0 left-0 w-full" />
    </div>
  );
}
