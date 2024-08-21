"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log("Error: " + error);
  }, [error]);
  return (
    <div className="max-w-screen-sm text-center items-center">
      <h2>Something went wrong!</h2>
      <button className="bg-amber-500 p-3" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
