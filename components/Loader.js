import React from "react";

export default function Loader({ loading, children, skeleton }) {
  if (!loading) return children;
  if (loading && skeleton) return skeleton;
  return (
    <div className="flex w-full items-center justify-center">
      <div className="h-8 w-8 border-2 rounded-full border-gray-600 border-t-gray-400 animate-spin"></div>
    </div>
  );
}
