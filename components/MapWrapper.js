import React from "react";

export default function MapWrapper({ children }) {
  return (
    <div className="flex-1 min-h-screen w-full relative z-10">
      <div className="h-full w-full ">{children}</div>
    </div>
  );
}
