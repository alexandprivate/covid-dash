import { bounds } from "leaflet";
import React from "react";
import { MapContainer, GeoJSON, CircleMarker, Tooltip } from "react-leaflet";
import MyGeo from "./geo.json";

function CustomMarker({ country }) {
  const {
    countryInfo: { lat, long },
    cases,
    deaths,
    recovered,
  } = country;
  if (lat === null || long === null) {
    return null;
  }
  return (
    <CircleMarker
      center={[lat, long]}
      color="#db2777"
      fillColor="#f9a8d4"
      fillOpacity={0.5}
      radius={10}
    >
      <Tooltip direction="top">
        <p className="text-base w-full font-bold capitalize">
          {country.country}
        </p>
        {/* <div className="border-t pt-2 mt-1 block text-left leading-none space-y-1 pr-4">
          <div className="mb-1">
            <p>Total Cases</p>
            <p className="font-bold text-base">{cases}</p>
          </div>
          <div className="mb-1">
            <p>Recovered</p>
            <p className="font-bold text-base">{recovered}</p>
          </div>
          <div className="mb-1">
            <p>Deaths</p>
            <p className="font-bold text-base"> {deaths}</p>
          </div>
        </div> */}
      </Tooltip>
    </CircleMarker>
  );
}

export default function Map({ countries = [], loadingCountries }) {
  const mapBounds = () =>
    countries?.map((country) => [
      country.countryInfo.lat,
      country.countryInfo.long,
    ]);
  return (
    <MapContainer
      scrollWheelZoom={false}
      bounds={mapBounds()}
      zoom={3}
      maxZoom={10}
      minZoom={3}
      style={{ background: "transparent" }}
    >
      <GeoJSON
        data={MyGeo}
        clickable={false}
        interactive={false}
        bubblingMouseEvents={false}
        pointerEvents="none"
        style={{
          fillColor: "#334155",
          stroke: true,
          color: "#e2e8f0",
          weight: 0.5,
          fill: true,
          fillOpacity: 1,
        }}
      />
      {countries?.map((country, index) => (
        <CustomMarker key={index} country={country} />
      ))}
    </MapContainer>
  );
}
