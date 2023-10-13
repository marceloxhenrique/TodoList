"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex flex-col  justify-center items-center">
      <h1 className="m-8 text-2xl">Home Page</h1>
      <button
        className="py-2 px-4 bg-blue-500 rounded-md"
        onClick={() => router.push("/tasks")}
      >
        Go to Tasks
      </button>
    </div>
  );
};

export default Page;
